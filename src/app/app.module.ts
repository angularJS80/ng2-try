import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AlertService} from "./_services/alert.service";
import {AuthenticationService} from "./_services/authentication.service";
import {HttpModule} from "@angular/http";
import {UserService} from "./_services/user.service";
import {ApiRequestService} from './_services/apiRequest.service'



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    HeroService,
    MessageService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ApiRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
