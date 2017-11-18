import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http,
  private router: Router,) { }
  //headers = new Headers({'Content-Type': 'application/json'});
    login(username: string, password: string) {
        return this.http.post('http://localhost:8080/api/authenticate', { username: username, password: password })
            .map((response: Response) => {
              alert(response);
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });

      /*.subscribe(
       data => {
       this.router.navigate([this.returnUrl]);
       },
       error => {
       this.alertService.error(error);
       this.loading = false;
       });*/


    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}
