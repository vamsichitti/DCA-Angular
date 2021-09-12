import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(credentials,person) {
    return this.http.post<any>(`http://localhost:8080/login/${person}`,credentials).pipe(
      map(
        response => {
          if (response && response.token) {
            // next  5 lines to display token and payload data. Not required for the app 
            console.log(response.token);
            // let jwtData = response.token.split('.')[1]
            // let payLoad = JSON.parse(window.atob(jwtData))
            // console.log('User name: ' + payLoad.sub)
            // console.log("Role: "+payLoad.role)

            //from this line required for the app
            localStorage.setItem('token', response.token);
            return response;
          }
        }

      )
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (!token)
      return false;

    return tokenNotExpired(null, token);
  }
  getRole():string{
    let token = localStorage.getItem('token');
    let jwtData = token.split('.')[1]
            let payLoad = JSON.parse(window.atob(jwtData))
            // console.log('User name: ' + payLoad.sub)
            // console.log("Role: "+payLoad.role)

            return payLoad.role
  }
}

