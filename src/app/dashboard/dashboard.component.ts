import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//import { HeroService }  from '../hero.service';
import { Hero } from '../heroes/hero';
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor( private route: ActivatedRoute,
               //private heroService: HeroService,
               private location: Location) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroes = HEROES;

    /*this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));*/
  }

}
