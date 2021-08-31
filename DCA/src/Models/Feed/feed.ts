import { Developer } from "../Developer/developer";

export class Feed {  
    
    feedId:number;
	query:string;
	feedTime:Date;
    feedUpdateTime:Date;
	topic:string;	// Programming/Java/Testing
	relevance:number;	// Likes on Feed increase relevance
	developer:Developer;
	//responses :List<Response> ;
	totalComments:number;
    
}