import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute ,RouterStateSnapshot} from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../heroes/hero';
import {isBoolean} from "util";
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  //@Output() sendObject = new EventEmitter<Object>();
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    //private  routerStateSnapshot:RouterStateSnapshot
  ) {}


  message: String = "Hola Mundo!";
  feedbackText:String ="send to parent ";

  feedbacktoParent(){
    this.message = this.feedbackText;
    console.log(this.feedbackText);
    //this.sendObject.emit(this.feedbackText);
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //const id = this.route.snapshot.paramMap.get('id');
    //this.heroService.getHero(id)
    //  .subscribe(hero => this.hero = hero);
    this.hero= JSON.parse(this.route.snapshot.paramMap.get('heroStr'));
    //console.log(this.routerStateSnapshot.url);

  }


  save(): void {
    this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }


  goBack(): void {
    this.location.back();
  }
}
