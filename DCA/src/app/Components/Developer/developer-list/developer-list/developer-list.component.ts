import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/Models/Developer/developer';
import { DeveloperService } from 'src/Services/Developer/developer.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {


  constructor(private service: DeveloperService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
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
        this.message = response.message;
        this.loadData();
      },
      (errorResponse) => {
        this.message = errorResponse.error.errorMessage;
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


  gotoDevDetails(devId:Number) {
    this.router.navigate(['devDetails/'+devId]);

  }
}
