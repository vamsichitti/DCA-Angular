import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/Models/Response/response';
import { ResponsesService } from 'src/Services/Responses/responses.service';

@Component({
  selector: 'app-create-response',
  templateUrl: './create-response.component.html',
  styleUrls: ['./create-response.component.css']
})
export class CreateResponseComponent implements OnInit {

  constructor(private responseService:ResponsesService,private router:Router) { }

  response:Response = new Response()

  ngOnInit() {
  }
  msgClass:string
  message: any;
  answer:string = "";
  
  


  addResponse(){
    this.response.answer = this.answer
    this.responseService.createResponse(this.response).subscribe(
      (data) => {
        this.message= data.message;
        this.msgClass = 'alert alert-success';

      },
      (fail) => {
        this.message = fail.error.errorMessage;
        this.msgClass = 'alert alert-danger';

      }
    )
     
  }
  gotoList() {
    this.router.navigate(['response-list'])
  }


  // addComment(comment:CommentNode){
  //   comment.addAnwser(new CommentNode(this.text));      
  //   comment.isOpen = false;
  //   this.text="";    
  //   console.log(this.comments);
  // }

  // openCommentText(comment){
  //   console.log(comment)
  //   comment.isOpen = !comment.isOpen;
  // }

  // remove(comment:CommentNode){    
  //   let index = this.comments.indexOf(comment);
  //   this.comments = this.comments.splice(index,1);        
  // }

}
