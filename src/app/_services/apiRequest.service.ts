/**
 * Refby GitHub
 * Modify by cho.yong-beom on 2017-11-18.
 */
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
//import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Observable} from 'rxjs/Observable';
import {GlobalConst} from "../globalconst";
//import { UserInfoService } from './user-info.service';

@Injectable()
export class ApiRequestService {

  private baseApiPath:string = "";
  public set setbaseApiPath(apiPath:string) {
    this.baseApiPath = apiPath;
  }

  constructor(
    private http: Http,
    //private userInfoService:UserInfoService,
    private router:Router,
  ) { }

  appendAuthHeader():Headers {
    console.log("setting auth header")
    let headers = new Headers({'Content-Type': 'application/json'});
  //  let token = this.userInfoService.getStoredToken();
    let token:string =null;
    if(JSON.parse(localStorage.getItem('currentUser'))){
        token = JSON.parse(localStorage.getItem('currentUser')).token;
    }

    if (token !==null) {
      headers.append("Authorization", token);
    }
    return headers;
  }

  getRequestOptions(requestMethod, url:string, urlParam?:URLSearchParams, body?:Object):RequestOptions {
    let options = new RequestOptions({
      headers: this.appendAuthHeader(),
      method : requestMethod,
      url    : this.baseApiPath + url
    });
    if (urlParam){
      options = options.merge({ params: urlParam});
    }
    if (body){
      options = options.merge({body: JSON.stringify(body)});
    }
    return options;
  }

  get(url:string, urlParams?:URLSearchParams):Observable<any>{
    let me = this;
    let requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
    console.log(requestOptions);


    return this.http.request(new Request(requestOptions))
      /*.catch(function(error:any){
        if (error.status === 401 || error.status === 403){
          me.router.navigate(['/logout']);
        }
        return Observable.throw(error || 'Server error')
      });*/
  }

  /*post(url:string, body:Object):Observable<any>{ angular cli http 자원에 대한 post 와 request 함수 차이 가 무엇인지 http 라이브러리에서 제공되는 메스드별로 알아볼 필요가 있다.
    console.log(url);
    console.log(body);
    let me = this;
    let requestOptions = this.getRequestOptions(RequestMethod.Post, url, undefined, body);
    console.log(this.http.request(this.baseApiPath+url,requestOptions));
    return this.http.post(this.baseApiPath+url,requestOptions);
   /!*.catch(function(error:any){
        return Observable.throw(error || 'Server error')
      });*!/

    //return this.http.request(this.baseApiPath+url,requestOptions);
  }*/

  request(url:string, body:Object):Observable<any>{
    console.log(url);
    console.log(body);
    console.log(this.baseApiPath)
    let me = this;
    let requestOptions = this.getRequestOptions(RequestMethod.Post, url, undefined, body);
    console.log(this.http.request(this.baseApiPath+url,requestOptions));
    return this.http.request(new Request(requestOptions));
    /*.catch(function(error:any){
     return Observable.throw(error || 'Server error')
     });*/

    //return this.http.request(this.baseApiPath+url,requestOptions);
  }

  put(url:string, body:Object):Observable<any>{
    let me = this;
    let requestOptions = this.getRequestOptions(RequestMethod.Put, url, undefined, body);
    return this.http.request(new Request(requestOptions))
      .catch(function(error:any){
        if (error.status === 401){
          me.router.navigate(['/logout']);
        }
        return Observable.throw(error || 'Server error')
      });
  }

  delete(url:string):Observable<any>{
    let me = this;
    let requestOptions = this.getRequestOptions(RequestMethod.Delete, url);
    return this.http.request(new Request(requestOptions))
      /*.catch(function(error:any){
        if (error.status === 401){
          me.router.navigate(['/logout']);
        }
        return Observable.throw(error || 'Server error')
      });*/
  }
}
