import { Injectable } from '@angular/core';
import { Observable ,} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import {Response} from '@angular/http';
import {MessageService} from './message.service'
import { catchError, map, tap } from 'rxjs/operators';
import {ApiRequestService} from './_services/apiRequest.service'
import {GlobalConst} from "./globalconst";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable() // 인젝터블이 먼가요? 서비스에서 사용하는 데코레이터로 컴포넌트단에서는 VIEW 와 관련된부분을 담당하고 서비스에서는 비지니스 로직을 구현하는 형태이다.
              // 인텍터블을 통해 해당 서비스를 컴포넌트에서 호출만하여 사용가능하도록 한다.
              // 사용하고자 하는 컴포넌트에서는 생성자에서 DI 형태로 주입받아 사용가능.
export class HeroService {
  private heroesUrl = 'http://localhost:8080/hero/getList';  // URL to web api

getHeroes(): Observable<Hero[]> { // Observable은 먼가요?
    /* return this.http.post<Hero[]>(this.heroesUrl,{})
      .pipe(
        map(response => <Hero[]>response["rtnList"]),
        tap(response=> this.log(response)),
        catchError(this.handleError('getHeroes', []))
    );*/

  //console.log(this.apirequestService.post('/hero/getList',{}));
    return this.apirequestService.request('/hero/getList',{})
      .pipe(
      map(response => <Hero[]>(JSON.parse(response["_body"]).rtnList)),
      tap(response=> console.log(response)),
        catchError(this.handleError('getHeroes', []))
    );
}




  updateHero (hero: Hero): Observable<Hero> {
    /*return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );*/
    return this.apirequestService.request('/hero/reg',hero)
      .pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Hero>('updateHero'))
      );

  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /*getHeroes(): Hero[] {
    return HEROES;
  }*/

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    //return of(HEROES.filter(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }


  /** Log a HeroService message with the MessageService */
  private log(message: any) {
    this.messageService.add('HeroService: ' + message);
  }

  constructor(
    private http: HttpClient,
    private apirequestService:ApiRequestService,
    private messageService: MessageService) {
    this.apirequestService.setbaseApiPath = GlobalConst.HEROAPI_ENDPOINT;
  }

}
