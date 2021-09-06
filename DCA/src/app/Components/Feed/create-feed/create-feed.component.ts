import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feed } from 'src/Models/Feed/feed';
import { FeedService } from 'src/Services/Feed/feed.service';

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrls: ['./create-feed.component.css']
})
export class CreateFeedComponent implements OnInit {

  constructor(private service:FeedService,private router:Router) { }

  ngOnInit() {
  }

  msgClass:string
  message: any;

  createNew(data: Feed) {
   console.log(data);
    this.service.addFeed(data).subscribe(
      (data) => {
        this.message= data;
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
    this.router.navigate(['feed-list'])
  }
}


