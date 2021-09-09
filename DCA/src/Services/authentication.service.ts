import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/Models/User/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(user: User) {

    return this.http.post<any>('http://localhost:8080/login', user).pipe(
      map(
        response => {
          if (response && response.token) {
            // next  5 lines to display token and payload data. Not required for the app 
            console.log(response.token);
            let jwtData = response.token.split('.')[1]
            let payLoad = JSON.parse(window.atob(jwtData))
            console.log('UserId: ' + payLoad.sub)
            console.log("Role: " + payLoad.role)

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
}

// private baseUrl = 'http://localhost:8080/auth/'; 

//   constructor(private http: HttpClient,  private router: Router){}
//   signup(user: User): Observable<any>{
//     //console.log('In AuthService');
//     return this.http.post(this.baseUrl + 'signup', user, { headers, responseType: 'text'})
//                     .pipe(catchError(this.handleError));
//   }
//   login(user: string, password: string){
//     // console.log('In AuthService -  login');
//     return this.http.post<any>(this.baseUrl + 'login', 
//       {userName: user, password:password}, {headers})
//       .pipe(catchError(this.handleError),
//         map(userData => {
//           sessionStorage.setItem("username", user);
//           let tokenStr = "Bearer " + userData.token;
//           console.log("Token---  " + tokenStr);
//           sessionStorage.setItem("token", tokenStr);
//           sessionStorage.setItem("roles", JSON.stringify(userData.roles));
//           return userData;
//         })
//       ); 
//   }

//   logout(){
//     sessionStorage.clear()
//     this.router.navigate(['/login']);
//   }

//   isLoggedIn(): boolean{
//     return sessionStorage.getItem('username') !== null;
//   }

//   private handleError(httpError: HttpErrorResponse) {
//     let message:string = '';

//     if (httpError.error instanceof ProgressEvent) {
//       console.log('in progrss event')
//       message = "Network error";
//     }
//     else {
//       message = httpError.error.message;
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong.
//       console.error(
//         `Backend returned code ${httpError.status}, ` +
//         `body was: ${httpError.error}`);
//     }
//     // Return an observable with a user-facing error message.
//     return throwError(message);
//   }
// }

