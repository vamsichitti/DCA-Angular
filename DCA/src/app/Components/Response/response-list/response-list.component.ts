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

  responses : Response[];

  loadData(){
    this.responseService.getResponseByFeed(this.id)

  }

}
