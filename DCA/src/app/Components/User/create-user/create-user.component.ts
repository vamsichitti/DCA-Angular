import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/Services/User/user.service';
import { first } from 'rxjs/operators';
import { User } from 'src/Models/User/user';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService:UserService
        // private accountService: AccountService,
        // private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
                   username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            role: ['', Validators.required],
     
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        var user = new User();
        user.userId = this.form.get('username').value;
        user.password = this.form.get('password').value;
        user.role = this.form.get('role').value;
        
        this.userService.addUser(user)
            .pipe()
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['/check-login'], { relativeTo: this.route });
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }

gotoList() {
    this.router.navigate(['user-list'])
  }
}




