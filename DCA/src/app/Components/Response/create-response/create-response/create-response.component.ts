import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/Models/Response/response';
import { ResponsesService } from 'src/Services/Responses/responses.service';
import { Feed } from "src/Models/Feed/feed";
import { Developer } from "src/Models/Developer/developer";
@Component({
  selector: 'app-create-response',
  templateUrl: './create-response.component.html',
  styleUrls: ['./create-response.component.css']
})
export class CreateResponseComponent implements OnInit {

  constructor(private responseService: ResponsesService, private router: Router, private route: ActivatedRoute) { }
  feed: Feed = { feedId: 0, UpdateDateTime: null, feedTime: null, developer: null, responses: null, query: null, topic: null, totalComments: null }
  developer: Developer = { devId: 0, email: null, feedList: null, isBlocked: null, isVerified: null, memberSince: null, name: null, skillLevel: null, totalFeeds: null }
  response: Response = { feed: this.feed, developer: this.developer, answer: null, respId: 0, responseTime: null, updatedResponseDateTime: null }
  feedid: number = null;
  devid: number = null;

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.feedid = parseInt(params.get('feedId'))
        this.devid = parseInt(params.get('devId'))
      }
    )

    this.response.developer.devId = this.devid
    this.response.feed.feedId = this.feedid
    console.log( this.response.developer.devId ,this.response.feed.feedId )
    
  }
  msgClass: string
  message: any;
  answer: string = "";

  addResponse() {
    this.response.answer = this.answer
    this.response.developer.devId = this.devid
    this.response.feed.feedId = this.feedid

    console.log(this.response.feed.feedId, this.response.developer.devId)

    this.responseService.createResponse(this.response).subscribe(
      (data) => {
        this.message = data;
        this.msgClass = 'alert alert-success';
        this.gotoList();

      },
      (fail) => {
        this.message = fail.error.errorMessage;
        this.msgClass = 'alert alert-danger';

      }
    )
  }


  
  gotoList() {
    this.router.navigate(['response-list',this.feedid,this.devid])
  }


 

}
