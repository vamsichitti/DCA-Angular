import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed } from 'src/Models/Feed/feed';
import { Developer } from 'src/Models/Developer/developer';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  baseURL = 'http://localhost:8080/feed';
  editURL = 'http://localhost:8080/feed/update';

  constructor(private http: HttpClient) { }
  
   //---->
   getFeedsList(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
    }
    //---->/save
   addFeed(feed: Feed):Observable<any> {
    return  this.http.post(`${this.baseURL}/save`, feed,{responseType:"text"})
  
    }
    //----> /getFeed/feedId
   getFeed(feedId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${feedId}`);

    }
    //---->/delete/feedId
   deleteFeed(feedId: number): Observable<any> {
      let url = `${this.baseURL}/delete/${feedId}`
      return this.http.delete(url, { responseType: 'text' })
  
    }
    //---->/update
   updateFeed(feed: Feed):Observable<any> {
      return this.http.put(`${this.editURL}/${feed.feedId}`, feed,{responseType:"text"})
    }
    //---->/getFeedBydeveloper/{devId}
   getFeedByDeveloper(devId: number): Observable<any> {
      console.log(this.http.get(`${this.baseURL}/getFeedBydeveloper/${devId}`))
      return this.http.get(`${this.baseURL}/getFeedBydeveloper/${devId}`);
      
    }
    //---->/getFeedBykeyword/{keyword}
   getFeedByKeyword(keyword: string): Observable<any> {
      console.log(this.http.get(`${this.baseURL}/getFeedBykeyword/${keyword}`));
      return this.http.get(`${this.baseURL}/getFeedBykeyword/${keyword}`);
    }
    //---->//getFeedBytopic/{topic}
   getFeedByTopic(topic: string): Observable<any> {
      console.log(this.http.get(`${this.baseURL}/getFeedBytopic/${topic}`));
      return this.http.get(`${this.baseURL}/getFeedBytopic/${topic}`);
    }

}
