﻿import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
//import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(
      //private userService: UserService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
       // this.loadAllUsers();
    }

   /* deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() }); // subcribe  map tap catch catcherror 등의 Observable 타입으로 받을때 사용가능한 메소드들의 사용법 알아보기
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }*/
}
