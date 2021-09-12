import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/Services/Admin/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message:string=null;
  constructor(private service:AdminService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
  }
  // onReset(){
  //   this.admin=null;
  // }

//   onSubmit(){
// this.service.addE(this.engineer).subscribe(
//   (response)=>{
// this.message=response
// console.log(response)

//   },
//   (fail)=>{
// this.message =JSON.parse(fail.error).errorMessage;
//   }
// )
    
//   }
 

}
