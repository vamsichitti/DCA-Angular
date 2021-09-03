import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/Models/Feed/feed';
import { FeedService } from 'src/Services/Feed/feed.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed-filter',
  templateUrl: './feed-filter.component.html',
  styleUrls: ['./feed-filter.component.css']
})
export class FeedFilterComponent implements OnInit {

  feedId:number=0;
  feed:Feed = new Feed;
  feeds!: Observable<Feed[]>;

  msgClass: string;
  message: string = null;
  failMessage: string = null;
  validationMessages=null;

  constructor(private route: ActivatedRoute, private router: Router,private service:FeedService) { }

  ngOnInit() : void {
    this.feed = new Feed();
  }
  getFeedByDeveloper(devId:number){
    
    console.log(devId);
    
    this.getFeedByDeveloper = this.route.snapshot.params[devId];

    this.feeds = this.service.getFeedByDeveloper(devId);

}

getFeedByKeyword(keyword:string){
    
  console.log(keyword);
  
  this.getFeedByKeyword = this.route.snapshot.params[keyword];

  this.feeds = this.service.getFeedByKeyword(keyword);

}

getFeedByTopic(topic:string){
    
  console.log(topic);
  
  this.getFeedByTopic = this.route.snapshot.params[topic];

  this.feeds = this.service.getFeedByTopic(topic);

}

}