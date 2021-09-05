import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User/user';
import { UserService } from 'src/Services/User/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: string;
  user: User;


  constructor(private route: ActivatedRoute,private router: Router,
    private developerService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.userId = this.route.snapshot.params['devId'];
    
    this.developerService.getUserById(this.userId)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['user-list']);
  }

}
