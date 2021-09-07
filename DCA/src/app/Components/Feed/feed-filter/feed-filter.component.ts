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

  feedId : string;
  devId : number
  Developer : string[]
  feeds : Feed[];
  message:string;
  complaintId: string;
  feed:Feed = new Feed();
  // feeds!: Observable<Feed[]>;
  
  // msgClass: string;
  // message: string = null;
  // failMessage: string = null;
  // updatePosition: number = null!;
  // validationMessages=null;

  constructor(private route: ActivatedRoute, private router: Router,private service:FeedService) { }

 
  
  
  ngOnInit() : void {}
    searchFeeds(){
      this.service.getFeedByDeveloper(this.devId).subscribe(
        (response) => {
          this.feeds = response;
        },
        (errorResponse) => {
          this.message = errorResponse.error.errorMessage
        }
      );
  }
  
  


   
  getFeedByDeveloper(devId:number){
   
    console.log(devId);
    
    this.router.navigate(['getFeedByDeveloper',devId])

}

getFeedByKeyword(keyword:string){
  this.router.navigate(['getFeedByKeyword',keyword])
  // console.log(keyword);
  
  // this.getFeedByKeyword = this.route.snapshot.params[keyword];

  // this.feeds = this.service.getFeedByKeyword(keyword);

}

getFeedByTopic(topic:string){
    
  // console.log(topic);
  
  // this.getFeedByTopic = this.route.snapshot.params[topic];

  // this.feeds = this.service.getFeedByTopic(topic);
  this.router.navigate(['getFeedByTopic',topic])
}

}