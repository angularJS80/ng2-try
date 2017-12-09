import { Component } from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";
import {HeroService} from "./hero.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class



AppComponent {
  title = 'corpApp';

  constructor (private authenticationService:AuthenticationService
  ){

  }
  logOut(){

    this.authenticationService.logout();
  }
}
