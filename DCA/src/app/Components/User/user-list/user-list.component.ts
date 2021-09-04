import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User/User';
import { UserService } from 'src/Services/User/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  header: string = "List of Users";

  users: User[] = [];

  create: boolean = false;
  message: string = null!;
  failMessage: string = null;
  updatePosition: number = null!;

  


  loadData(): void {
    this.service.getAllUsers().subscribe(
      (data) => {
        this.users = data;

      },
      (errorResponse) => {
        this.failMessage = errorResponse.error.errorMessage;
      }
    )
  }

  createNew() {
    this.create = true;
  }

  afterCreate(message: string) {
    if (message == "created") {
      this.message = `New User added`
      this.loadData();
    }
    this.create = false;
  }

  modify(pos: number) {
    this.updatePosition = pos;
  }

  updateComplete(message: string) {
    this.message = message;
    this.updatePosition = null!;
  }

}




