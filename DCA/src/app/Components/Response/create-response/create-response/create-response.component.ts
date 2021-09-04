import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/Models/Response/response';
import { ResponsesService } from 'src/Services/Responses/responses.service';

@Component({
  selector: 'app-create-response',
  templateUrl: './create-response.component.html',
  styleUrls: ['./create-response.component.css']
})
export class CreateResponseComponent implements OnInit {

  constructor(private responseService:ResponsesService,private router:Router) { }

  response:Response = new Response()

  ngOnInit() {
  }
  msgClass:string
  message: any;


  addResponse(data:Response){
    this.responseService.createResponse(data).subscribe(
      (data) => {
        this.message= data.message;
        this.msgClass = 'alert alert-success';

      },
      (fail) => {
        this.message = fail.error.errorMessage;
        this.msgClass = 'alert alert-danger';

      }
    )
     
  }
  gotoList() {
    this.router.navigate(['response-list'])
  }

}
