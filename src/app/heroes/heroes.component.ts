import { Component, OnInit } from '@angular/core';
import {Hero} from './hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  /*getHeroes(): void { // 영웅목록은 서비스로 부터 받아 온다.
    this.heroes = this.heroService.getHeroes();
  }*/

  /*selectedHero: Hero;*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  addHero(): void {
    this.router.navigate(['addnew']);
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
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


  constructor(
    private router: Router,
    private heroService: HeroService
  ) { } // 컴포넌트초기화시 서비스를 생성자로 받는다.

  ngOnInit() { // 컴포넌트가 올라오는 시점에 영웅목록을 가져온다.
    this.heroes = HEROES;

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
