import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User/user';
import { UserService } from 'src/Services/User/user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  message: any;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  
  msgClass: string;

  createNew(data: User) {

    // this.service.addUser(data).subscribe(
    //   (data) => {
    //     this.message = data.message;
    //     this.msgClass = 'alert alert-success';

    //   },

    //   (fail) => {
    //     this.message = fail.error.errorMessage;
    //     this.msgClass = 'alert alert-danger';

    //   }
  //  )
  }

  gotoList() {
    this.router.navigate(['get-users'])
  }

}

