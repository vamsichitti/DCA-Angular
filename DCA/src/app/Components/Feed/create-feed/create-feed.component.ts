import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feed } from 'src/Models/Feed/feed';
import { FeedService } from 'src/Services/Feed/feed.service';
import {Developer} from "src/Models/Developer/developer";

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrls: ['./create-feed.component.css']
})
export class CreateFeedComponent implements OnInit {

  constructor(private service:FeedService,private router:Router,private route:ActivatedRoute) { }
  developer:Developer={devId:0,email:null,feedList:null,isBlocked:null,isVerified:null,memberSince:null,name:null,skillLevel:null,totalFeeds:null}
  feed:Feed = {feedId:0,UpdateDateTime:null,feedTime:null,developer:this.developer,responses:null,query:null,topic:null,totalComments:null}
  
   devid:number = null;

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        
        this.devid = parseInt(params.get('devId'))
  }
    )
   
    this.feed.developer.devId=this.devid
    console.log(this.feed.developer.devId)
}
  msgClass:string
  message: any;
  


  createNew(data:Feed) {
  
    this.feed.developer.devId=this.devid

    console.log(this.feed.developer.devId)
    this.service.addFeed(data).subscribe(
      (data) => {
        this.message= data;
        this.msgClass = 'alert alert-success';
        console.log(this.message)
      },

      (fail) => {
        console.log(fail);
        this.message = fail.error.errorMessage;
        this.msgClass = 'alert alert-danger';

      }
    )
  }

  gotoList() {
    this.router.navigate(['feed-list'])
  }
}


