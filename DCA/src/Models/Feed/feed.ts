import { Time } from "@angular/common";
import { Developer } from "../Developer/developer";

export class Feed {  
    
    feedId:number;
	query:string;
	feedTime:Time;
    UpdateDateTime:Date;
	topic:Topic;	// Programming/Java/Testing
	
	developer:Developer;
    responses :number ;
	totalComments:number;
    
}

enum Topic {
	JAVA,
	PROGRAMMING,
	TESTING
}