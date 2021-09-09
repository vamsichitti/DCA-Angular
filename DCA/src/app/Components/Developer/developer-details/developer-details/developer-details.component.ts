import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from 'src/Models/Developer/developer';
import { DeveloperService } from 'src/Services/Developer/developer.service';
import { FeedService } from 'src/Services/Feed/feed.service';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent implements OnInit {

  devId: number;
  developer: Developer;
  developers: Developer[] = [];


  constructor(private route: ActivatedRoute,private router: Router,
    private developerService: DeveloperService, private feedService: FeedService) { }

  ngOnInit() {
    this.developer = new Developer();

    this.devId = this.route.snapshot.params['devId'];
    
    this.developerService.getDeveloper(this.devId)
      .subscribe(data => {
        console.log(data)
        this.developer = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['dev-list']);
  }
  
  delete(feedId: number): void {

    this.feedService.deleteFeed(feedId).subscribe(
      (response) => {
        // this.message = response;
        // this.loadData();
        // console.log(this.message);
      },
      (errorResponse) => {
        // this.message = errorResponse.error.errorMessage
        // this.loadData();
      }
    )

}
}
