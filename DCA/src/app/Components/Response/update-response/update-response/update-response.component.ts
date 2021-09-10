import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response} from 'src/Models/Response/response';
import { ResponsesService } from 'src/Services/Responses/responses.service';


@Component({
  selector: 'app-update-response',
  templateUrl: './update-response.component.html',
  styleUrls: ['./update-response.component.css']

})
export class UpdateResponseComponent implements OnInit {

  constructor(private service: ResponsesService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router)   // required for navigation to list component after successful update) { }
     {}  
    
   response: Response =  {respId:null, answer: " ",responseTime:null ,updatedResponseDateTime:null,developer:null,feed:null };
   msgClass : String;
   message: String = null;
   failMessage: String = null;
validationMessage:String[]=null;

  ngOnInit() {


    
    this.route.paramMap.subscribe(
      (params) => {
        let respId:number = parseInt(params.get('respId'))
       
        this.service.getResponse(respId)
        .subscribe(
          (data) => {
            this.response = data 
          },
          (fail)=>  { this.failMessage=fail.error.errorMessage;
          }
        )
        
      }

    )

  }

// this method is called when data update to be done and update button is clicked

update() {




  this.service.updateResponse(this.response).subscribe(
(resp)=>{
  this.message = resp;
  this.msgClass='alert alert-success'
  this.validationMessage=null;
  console.log(this.message);
},
(fail)=>{
  console.log(fail);
this.message=fail.error.errorMessage;
this.validationMessage=fail.error.errors;
this.msgClass='alert alert-danger';
}

  )
}
gotoList() {
  this.router.navigate(["feed-list"])
}
}

