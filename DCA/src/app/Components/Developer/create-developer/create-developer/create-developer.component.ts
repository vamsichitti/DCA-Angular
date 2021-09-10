import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/Models/Developer/developer';
import { DeveloperService } from 'src/Services/Developer/developer.service';

@Component({
  selector: 'app-create-developer',
  templateUrl: './create-developer.component.html',
  styleUrls: ['./create-developer.component.css']
})
export class CreateDeveloperComponent implements OnInit {
  message: any;
  userId:"";


  constructor(private service: DeveloperService, private router: Router) { }

  ngOnInit(): void {
  }

  msgClass: string;

  createNew(data: any) {

    console.log(data);
    this.userId = data.userId;
    this.service.addDeveloper(data,this.userId).subscribe(
      (data) => {
        this.message = data;
        this.msgClass = 'alert alert-success';
        console.log(this.message);
      },

      (fail) => {
        console.log(fail);
        this.message = fail.error.errorMessage;
        this.msgClass = 'alert alert-danger';

      }
    )
  }

  gotoList() {
    this.router.navigate(['dev-list'])
  }
}



