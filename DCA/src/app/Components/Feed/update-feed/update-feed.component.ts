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
  feedId:number=0;
  feed:Feed = new Feed;
  msgClass: string;
  message: string = null;
  failMessage: string = null;
  validationMessages=null;

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
        let empId:number = parseInt(params.get('feedId'))
      
        this.service.getFeed(this.feedId).subscribe(
          (data) => this.feed= data,
          (fail)=>  this.failMessage=fail.error.errorMessage
        )
        
      }

    )

  }

// this method is called when data update to be done and update button is clicked
update() {

   this.service.updateFeed(this.feed).subscribe(
     (resp)=>{
      this.message = resp.message
      this.msgClass = 'alert alert-success'
      this.validationMessages=null;
      this.gotoList;
     },
     (fail)=>{
      this.message = fail.error.errorMessage;
      this.validationMessages=fail.error.errors;
      this.msgClass = 'alert alert-danger'

     }

   )
  
}

gotoList() {
  this.router.navigate(["empList"])
}
  
}





