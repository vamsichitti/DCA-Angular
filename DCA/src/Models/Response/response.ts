import { Time } from "@angular/common";
import { Developer } from "../Developer/developer";
import { Feed } from "../Feed/feed";

export class Response{
    respId:number;
    answer:string;
    response:Time;
    updatedResponseDateTime:Date;
    developer:Developer;
    feed:Feed;
}