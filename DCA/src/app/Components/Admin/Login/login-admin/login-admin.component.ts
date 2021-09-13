import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  message: string=null;
  openmessage:string=null
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
    // let token = localStorage.getItem('token');


     if( this.authenticationService.isLoggedIn()){
    
      this.openmessage=`           You are not Authorized to do this.Because ,You are already logged in as ${this.authenticationService.getRole()}` 
    }
    
  }
  signIn(credentials) {
    this.authenticationService.login(credentials,"admin")
      .subscribe(result => {
        this.router.navigate(['/home']);
        this.message=null;
      },
         fail => {
          this.message = fail.error.errorMessage;
        }
      );
// console.log(credentials.username,credentials.password)
  }

  reload(){
    localStorage.removeItem('token');
    this.router.navigate(['admin-login']);
  }

}
