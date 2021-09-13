import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/Models/Developer/developer';
import { DeveloperService } from 'src/Services/Developer/developer.service';

@Component({
  selector: 'app-devlist',
  templateUrl: './devlist.component.html',
  styleUrls: ['./devlist.component.css']
})
export class DevlistComponent implements OnInit {

  authenticationService: any;


  constructor(private service: DeveloperService, private router: Router) { }

  ngOnInit(): void {

    this.loadData();
    // console.log(this.developers);
  }

  header: string = "List of Developers";

  developers: Developer[] = [];

  create: boolean = false;
  message: string = null!;
  failMessage: string = null;
  updatePosition: number = null!;

  delete(devId: number): void {

    this.service.deleteDeveloper(devId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (errorResponse) => {

        this.message = JSON.parse(errorResponse.error).error;
        console.log(errorResponse.error);
        this.loadData();
      }
    )

  }


  loadData(): void {
    this.service.getAllDevelopers().subscribe(
      (data) => {
        this.developers = data;

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
      this.message = `New Developer added`
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


  gotoDevDetails(devId: Number) {
    this.router.navigate(['admin-dev/' + devId]);

  }

}
