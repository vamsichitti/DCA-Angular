import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from 'src/Models/Developer/developer';
import { DeveloperService } from 'src/Services/Developer/developer.service';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent implements OnInit {

  devId: number;
  developer: Developer;


  constructor(private route: ActivatedRoute,private router: Router,
    private developerService: DeveloperService) { }

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
  

}
