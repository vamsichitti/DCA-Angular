import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/Models/Developer/developer';
import { Feed } from 'src/Models/Feed/feed';
import { FeedService } from 'src/Services/Feed/feed.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  constructor(private service:FeedService) { }

  ngOnInit():void {
    this.loadData();
    // console.log(this.feeds);
  }
  header: string = "All Feeds";

  feeds: Feed[] =[];
  developer: Developer[];
  create: boolean = false;
  message: string = null;
  failMessage: string = null;
  updatePosition: number = null!;

  delete(feedId: number): void {

    this.service.deleteFeed(feedId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
        console.log(this.message);
      },
      (errorResponse) => {
        this.message = errorResponse.error.errorMessage
        this.loadData();
      }
    )

  }

  loadData(): void {
    this.service.getFeedsList().subscribe(
      (data) => {
        this.feeds = data;
      },
      (errorResponse) => {
        this.failMessage = errorResponse.error.errorMessage
      }
    )
  }
  createNew() {
    this.create = true;
  }

  modify(pos: number) {
    this.updatePosition = pos;
  }
  updateComplete(message: string) {
    this.message = message;
  }
}


