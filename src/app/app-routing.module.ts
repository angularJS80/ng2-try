import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component'
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ListComponent} from "./list/list.component";
import {TodoComponent} from "./todo/todo.component";
import {RunstateComponent} from "./runstate/runstate.component";
import {ChatComponent} from "./chat/chat.component";
import {AttachComponent} from "./attach/attach.component";


const routes: Routes = [
  { path: '', redirectTo: '/runstate', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'runstate', component: RunstateComponent },
  { path: 'detail/:heroStr', component: HeroDetailComponent },
  { path: 'addnew/:heroStr', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'observerlist', component: ListComponent},
  { path: 'todolist', component: TodoComponent},
  { path: 'chats', component: ChatComponent},
  { path: 'attachfile', component: AttachComponent},




];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
