
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User/user';
import { AlertService } from 'src/Services/alert.service';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-check-login',
  templateUrl: './check-login.component.html',
  styleUrls: ['./check-login.component.css']
})
export class CheckLoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  message: string = null;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit(): void {
    var user = new User();
    user.userId = this.form.get('userId').value;
    user.password = this.form.get('password').value;
    this.authenticationService.login(user).subscribe(
      data => {
        console.log(data)
        // this.localStorage.saveToken(data.accessToken);
        // this.localStorage.saveUser(data);

        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.localStorage.getUser().roles;
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err.error.message)
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      }
    );
  }
}




