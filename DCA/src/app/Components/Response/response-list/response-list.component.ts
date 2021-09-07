import { Component, OnInit } from '@angular/core';
import { Response } from 'src/Models/Response/response';
import { ResponsesService } from 'src/Services/Responses/responses.service';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {

  constructor(private responseService:ResponsesService) { }

  ngOnInit() {
  }

  id:number;
  failmessage : string = null;
  message :string = null;

  responses : Response[];

  deleteResponse(respId:number):void{
    this.responseService.deleteResponse(respId).subscribe(
      (data) => {
        this.message = data.message;
        
      },
      (errorResponse) => {

        this.failmessage = errorResponse.error.errorMessage
      }
    )
  }

  loadData(feedId:number){
    this.responseService.getResponseByFeed(feedId).subscribe(
     data => {this.responses = data;},

     errorResponse => {this.failmessage = errorResponse.error.errorMessage}

    )

  }

}
