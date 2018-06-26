import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import {  JasperoConfirmationsModule} from '@jaspero/ng2-confirmations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {AlertComponent} from "./_directives/alert.component";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import {ItemService} from "./item/item.service";
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import {TodoService} from "./todo/todo.service";
import { RunstateComponent } from './runstate/runstate.component';
import {GaugeModule} from "angular-gauge";
import {AngularFireDatabaseModule} from "angularfire2/database-deprecated";
import {AngularFireModule} from "angularfire2";

import { ChatComponent } from './chat/chat.component';
import {ChatService} from "./chat.service";
import {FileUploadModule} from "ng2-file-upload";
import { AttachComponent } from './attach/attach.component';
import { FilemngComponent } from './filemng/filemng.component';
import {LimitToPipe} from "./pipe/limit-to.pipe";

/*angular movie*/
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import {SmartPlaylistComponent} from "./smart-playlist/smart-playlist.component";
import {VgBufferingModule} from "videogular2/src/buffering/buffering";
import { UtbattachComponent } from './utbattach/utbattach.component';
import { TempmngComponent } from './tempmng/tempmng.component';
import  {WindowRef} from './window.ref'


const firebaseAuth = {
  apiKey: "AIzaSyCVh5eTAp7HZhnak_uAoS-LvK3xHqXt9lM",
  authDomain: "ionic-chat-project-ace74.firebaseapp.com",
  databaseURL: "https://ionic-chat-project-ace74.firebaseio.com",
  projectId: "ionic-chat-project-ace74",
  storageBucket: "ionic-chat-project-ace74.appspot.com",
  messagingSenderId: "644376250918"
};

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AlertComponent, // 미사용
    HomeComponent, // 미사용
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    ItemComponent,
    RegisterComponent,
    TodoComponent,
    RunstateComponent,
    ListComponent,
    ChatComponent,
    AttachComponent,
    FilemngComponent,
    SmartPlaylistComponent,
    UtbattachComponent,
    TempmngComponent,
      LimitToPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    GaugeModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    VgCoreModule,
    VgControlsModule,
    FileUploadModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    JasperoConfirmationsModule,
    BrowserAnimationsModule,

   // MaterialModule.forRoot()
  ],


  providers: [
    HeroService,
    MessageService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ApiRequestService,
    ItemService,
    TodoService,
    ChatService,
    WindowRef,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
