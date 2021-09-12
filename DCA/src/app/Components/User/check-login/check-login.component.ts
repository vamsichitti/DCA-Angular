
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/Models/User/User';
import { AlertService } from 'src/Services/alert.service';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-check-login',
  templateUrl: './check-login.component.html',
  styleUrls: ['./check-login.component.css']
})
export class CheckLoginComponent implements OnInit {

message: string=null;
openmessage:string=null
constructor(
  private router: Router,
  private authenticationService: AuthenticationService) { }
ngOnInit(): void {
  // let token = localStorage.getItem('token');


   if( this.authenticationService.isLoggedIn()){
  
    this.openmessage=`you are already logged In as ${this.authenticationService.getRole()}` 
  }
  
}
signIn(credentials) {
  this.authenticationService.login(credentials,"user")
    .subscribe(result => {
      // console.log(credentials)
      this.router.navigate(['/addNew']);
      this.message=null;
    },
       fail => {
         
         
        this.message = fail.error.errorMessage;
      }
    );
// console.log(credentials.username,credentials.password)
}
}



