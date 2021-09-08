import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from 'src/Models/Developer/developer';
import { DeveloperService } from 'src/Services/Developer/developer.service';

@Component({
  selector: 'app-update-developer',
  templateUrl: './update-developer.component.html',
  styleUrls: ['./update-developer.component.css']
})
export class UpdateDeveloperComponent implements OnInit {

  message: any;

  constructor(private service: DeveloperService, private route: ActivatedRoute, private router: Router) { }

  developer: Developer = new Developer();
  pos: number;
  msgClass: string;
  devId: number;
  failMessage: string = null;
  validationMessage: string[] = null;


  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
        let devId: number = parseInt(params.get('devId'));
        console.log(devId);
        this.service.getDeveloper(devId).subscribe(
          (data) => {
            this.developer = data;
          },
          (fail) => {
            this.failMessage = fail.error.errorMessage;

          }
        )
      }

    )

  }

  updated() {
   this.service.updateDeveloper(this.developer).subscribe(
      (resp) => {
  console.log(resp);
        this.message = resp;

        this.msgClass = 'alert alert-success';
        this.validationMessage = null;
        console.log(this.message);

      },
      (fail) => {
        console.log(fail);
        this.message = fail.error.errorMessage;
        this.validationMessage = fail.error.errors;
        this.msgClass = 'alert alert-danger';

      }
    )

  }


  gotoList() {
    this.router.navigate(['dev-list'])
  }

}
