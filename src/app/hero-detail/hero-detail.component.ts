import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../heroes/hero';
import {isBoolean} from "util";
//import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() editable:string ;

  constructor(
    private route: ActivatedRoute,
    //private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {

    this.hero = new Hero();
    //const id = this.route.snapshot.paramMap.get('id');
    //this.heroService.getHero(id)
    //  .subscribe(hero => this.hero = hero);

    this.hero= JSON.parse(this.route.snapshot.paramMap.get('heroStr'));

  }

  goBack(): void {
    this.location.back();
  }
}
