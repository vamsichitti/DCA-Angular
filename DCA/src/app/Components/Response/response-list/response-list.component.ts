import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/Models/Response/response';
import { ResponsesService } from 'src/Services/Responses/responses.service';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {

  responsesList:Response[] = null;
  constructor(private responseService:ResponsesService, private route: ActivatedRoute) { }
devId:number=0;
feedId:number=0;
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
         this.feedId = parseInt(params.get('feedId'))
        this.devId = parseInt(params.get('devId'))
        this.responseService.getResponseByFeed(this.feedId).subscribe(
          
          (data) => {
            
            this.responsesList = data;
            console.log(data),
            this.responses = data
          this.loadData(this.feedId)} ,
        
          (fail) => {
            console.log(fail),
              this.failmessage = fail.error.errorMessage
          }


        )
      }

    )
  }

  id: number;
  failmessage: string = null;
  message: string = null;

  responses: Response[];

  delete(respId: number): void {
    this.responseService.deleteResponse(respId).subscribe(
      (data) => {
        this.message = data;
        this.reloadPage();

      },
      (errorResponse) => {

        this.failmessage = errorResponse.error.errorMessage
      }
    )
  }


  loadData(feedId: number) {
    this.responseService.getResponseByFeed(feedId).subscribe(
      data => {
        this.responses = data;
      },

      errorResponse => {
        this.failmessage = errorResponse.error.errorMessage
      }

    )

  }
  reloadPage() {
    window.location.reload();
  }

}
