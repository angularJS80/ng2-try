import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import {MessageService} from "../message.service";
import {ApiRequestService} from "../_services/apiRequest.service";
import {GlobalConst} from "../globalconst";

import {  ConfirmationService} from '@jaspero/ng2-confirmations';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public apirequestService:ApiRequestService,
        private authenticationService: AuthenticationService,
        private _confirmation: ConfirmationService,
        private messageService: MessageService) {
         apirequestService.setbaseApiPath = GlobalConst.NODE_ENDPOINT;


    }

    ngOnInit() {
        // reset login status
      console.log(localStorage.getItem("currentUser"))
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      if(localStorage.getItem("currentUser")!=null){
        this._confirmation.create('LogOut?', 'You should really LogOut and Login ')
          // The confirmation returns an Observable Subject which will notify you about the outcome
          .subscribe((ans: ResolveEmit) =>{
            console.log(ans.resolved);
            if(ans.resolved){

              this.authenticationService.logout();
              // get return url from route parameters or default to '/'

            }else{
              this.router.navigate(["/"]);
            }
          })
      }
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
         .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.messageService.add(error);
                    this.loading = false;
                });


    }
}


export interface ResolveEmit {
  // Returns this if modal resolved with yes or no
  resolved?: boolean;
  // If the modal was closed in some other way this is removed
  closedWithOutResolving?: string;
}

export interface ConfirmSettings {
  overlay?: boolean; // Default: true
  overlayClickToClose?: boolean; // Default: true
  showCloseButton?: boolean; // Default: true
  confirmText?: string; // Default: 'Yes'
  declineText?: string; // Default: 'No'
}

