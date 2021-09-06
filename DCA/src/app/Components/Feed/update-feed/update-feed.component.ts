import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feed } from 'src/Models/Feed/feed';
import { FeedService } from 'src/Services/Feed/feed.service';

@Component({
  selector: 'app-update-feed',
  templateUrl: './update-feed.component.html',
  styleUrls: ['./update-feed.component.css']
})
export class UpdateFeedComponent implements OnInit {

  constructor(private service: FeedService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router)   // required for navigation to list component after successful update
  { }
  feedId:number
  feed:Feed = new Feed();
  pos: number;
  msgClass: string;
  message: string = null;
  failMessage: string = null;
  validationMessages=null;

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
        let feedId: number = parseInt(params.get('feedId'))
        this.service.getFeed(feedId).subscribe(
          (data) => 
            this.feed = data ,
        
          (fail) => 
            this.failMessage = fail.error.errorMessage
          
        )
      }

    )

  }

// this method is called when data update to be done and update button is clicked
update() {
  
   this.service.updateFeed(this.feed).subscribe(
    
     (resp)=>{
      this.message = resp;
      this.msgClass = 'alert alert-success'
      this.validationMessages=null;
      console.log(this.message);
     
     },
     (fail)=>{
      console.log(fail);
      this.message = fail.error.errorMessage;
      this.validationMessages=fail.error.errors;
      this.msgClass = 'alert alert-danger'

     }

   )
  
}

gotoList() {
  this.router.navigate(["feed-list"])
}
  
}





