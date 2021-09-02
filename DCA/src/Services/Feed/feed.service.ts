import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed } from 'src/Models/Feed/feed';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  baseURL = 'http://localhost:9090/feed';

  constructor(private http: HttpClient) { }
  
   //---->
   getFeedsList(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
    }
    //---->/save
   addFeed(feed: Feed):Observable<any> {
    return  this.http.post(`${this.baseURL}/save`, feed)
  
    }
    //----> /getFeed/feedId
   getFeed(feedId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/getFeed/${feedId}`)

    }
    //---->/delete/feedId
   deleteFeed(feedId: number): Observable<any> {
      let url = `${this.baseURL}/delete/${feedId}`
      return this.http.delete(url, { responseType: 'text' })
  
    }
    //---->/update
   updateFeed(feed: Feed):Observable<any> {
      return this.http.put(`${this.baseURL}/update`, feed)
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
