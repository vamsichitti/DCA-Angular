import { Time } from "@angular/common";
import { Developer } from "../Developer/developer";

export class Response{
    respId:number;
    answer:string;
    response:Time;
    updatedResponseDateTime:Date;
    developer:Developer;
    
}