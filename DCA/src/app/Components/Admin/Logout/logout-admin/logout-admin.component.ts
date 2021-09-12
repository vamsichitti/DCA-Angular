import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-logout-admin',
  templateUrl: './logout-admin.component.html',
  styleUrls: ['./logout-admin.component.css']
})
export class LogoutAdminComponent{

  message:string;
  constructor(authService:AuthenticationService) {
    if(authService.isLoggedIn()){
    authService.logout();
    this.message="You have been successfully logged out";
    }
    else{
      this.message="You are not logged in";
    }
   }

}
