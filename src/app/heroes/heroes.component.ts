import {Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Hero} from './hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {Observer, Observable} from "rxjs";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent //implements AfterViewInit
{
  //@ViewChild(HeroDetailComponent) child;

  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  getHerosOble:Observable<any>;

  /*getHeroes(): void { // 영웅목록은 서비스로 부터 받아 온다.
    this.heroes = this.heroService.getHeroes();
  }*/

  message:String;
  /*ngAfterViewInit() {
    console.log(this.child+"1234");
    this.message = this.child.message;
  }*/

  /*selectedHero: Hero;*/
  onSelect(hero: Hero): void {
    hero.editable = false;
    this.selectedHero = hero;
  }


  addHero(): void {
    let newHero:Hero = new Hero();
    newHero.editable = true;
    let heroStr:string = JSON.stringify(newHero);

    this.router.navigate(['addnew',heroStr]);
    //this.addingHero = true;
    //this.selectedHero = null;
  }

/*
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }*/

  save(): void {
    /*this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());*/
  }

  add(name: string): void {
   /* name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });*/
  }

  delete(hero: Hero): void {
  /*  this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();*/
  }

  gotoDetail(): void {
    //this.router.navigate(['/detail', this.selectedHero.id]);
    this.selectedHero.editable = false;
    let heroStr:string = JSON.stringify(this.selectedHero);
    this.router.navigate(['/detail', heroStr]);
  }


  constructor(
    private router: Router,
    private heroService: HeroService
  ) { } // 컴포넌트초기화시 서비스를 생성자로 받는다.

  ngOnInit() { // 컴포넌트가 올라오는 시점에 영웅목록을 가져온다.
    //this.heroes = HEROES;

    this.getHerosOble = this.heroService.getHeroes();


    this.getHerosOble.subscribe(this.herosObserver);
    this.getHerosOble.subscribe(this.otherObserver);

  }

  herosObserver:Observer<any>= {
    next: (heroes )=>(this.heroes = heroes)
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

  otherObserver:Observer<any>= {
    next: (heroes )=>(this.selectedHero = heroes[0])
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

}
