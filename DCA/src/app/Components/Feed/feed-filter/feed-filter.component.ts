import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/Models/Feed/feed';
import { FeedService } from 'src/Services/Feed/feed.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Developer } from 'src/Models/Developer/developer';

@Component({
  selector: 'app-feed-filter',
  templateUrl: './feed-filter.component.html',
  styleUrls: ['./feed-filter.component.css']
})
export class FeedFilterComponent implements OnInit {

  // devId : number =null;
   feed: Feed = new Feed();
  // isCross = false;
   feeds!: Observable<Feed[]>;
  // message: string = null;
  // failMessage: string = null;
  // updatePosition: number = null!;

  constructor(private route: ActivatedRoute, private router: Router,private service:FeedService) { }

  feedFilter:Feed[];
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let devId: number = parseInt(params.get('devId'))
        this.service.getFeedByDeveloper(devId).subscribe(
          
          (data) => {
            debugger
            this.feedFilter=data;
            console.log(data),
            this.feeds = data
          this.loadData(devId)} ,
        
          (fail) => {
          console.log(fail),
            this.failmessage = fail.error.errorMessage}
            
          
        )
      }

    )
  }

  id:number;
  failmessage : string = null;
  message :string = null;

 developer:Developer;

  delete(feedId: number): void {

    this.service.deleteFeed(feedId).subscribe(
      (response) => {
        this.message = response;
       this.loadData(this.developer.devId);
        console.log(this.message);
      },
      (errorResponse) => {
        this.message = errorResponse.error.errorMessage
        this.loadData(this.developer.devId);
      }
    )

  }
  

  loadData(devId:number):void{
    this.service.getFeedByDeveloper(devId).subscribe(
     data => {
       this.feed = data;
      },

     errorResponse => {
       this.failmessage = errorResponse.error.errorMessage
      }

    )

  }
  reloadPage() {
    window.location.reload();
 }
 updateComplete(message: string) {
  this.message = message;
}

}
 
 


