import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/Models/Feed/feed';
import { FeedService } from 'src/Services/Feed/feed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Developer } from 'src/Models/Developer/developer';

@Component({
  selector: 'app-feed-filter',
  templateUrl: './feed-filter.component.html',
  styleUrls: ['./feed-filter.component.css']
})
export class FeedFilterComponent implements OnInit {


  feed: Feed = new Feed();
  id: number;
  failmessage: string = null;
  message: string = null;
  create: boolean = false;
  developer: Developer;

  feeds!: Observable<Feed[]>;
  msgClass: string;
  validationMessages: any;


  constructor(private route: ActivatedRoute, private router: Router, private service: FeedService) { }

  feedFilter: Feed[];
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let devId: number = parseInt(params.get('devId'))
        this.service.getFeedByDeveloper(devId).subscribe(

          (data) => {

            this.feedFilter = data;
            console.log(data),
            this.feeds = data
            this.loadData(devId)
          },

          (fail) => {
            console.log(fail),
            this.failmessage = fail.error.errorMessage
          }


        )
      }

    )
  }


  delete(feedId: number): void {

    this.service.deleteFeed(feedId).subscribe(
      (response) => {
        this.message = response;


        this.refresh();

      },
      (errorResponse) => {
        this.message = errorResponse.error.errorMessage

      }
    )

  }


  loadData(devId: number): void {
    this.service.getFeedByDeveloper(devId).subscribe(
      data => {
        this.feeds = data;
      },

      errorResponse => {
        this.failmessage = errorResponse.error.errorMessage
      }

    )

  }
  createNew() {
    this.create = true;
  }
  refresh() {
    window.location.reload();
  }

}



