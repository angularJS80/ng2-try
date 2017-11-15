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
    const id = this.route.snapshot.paramMap.get('id');
    //this.editable= this.route.snapshot.paramMap.get("editable");
    this.hero = new Hero();

    /*this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);*/
  }

  goBack(): void {
    this.location.back();
  }
}
