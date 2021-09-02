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

  getFeedsList(): Observable<any> {
    return this.http.get(`${this.baseURL}/all`)
    }
  
   addFeed(feed: Feed):Observable<any> {
    return  this.http.post(this.baseURL, feed)
  
    }

   getFeed(feedId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${feedId}`)

    }

   deleteFeed(feedId: number): Observable<any> {
      let url = `${this.baseURL}/${feedId}`
      return this.http.delete(url, { responseType: 'text' })
  
    }

   updateFeed(feed: Feed):Observable<any> {
      return this.http.put(this.baseURL, feed)
    }
  
   getFeedByDeveloper(devId: number): Observable<any> {
      console.log(this.http.get(`${this.baseURL}/${devId}`))
      return this.http.get(`${this.baseURL}/${devId}`);
      
    }
  
   getFeedByKeyword(keyword: string): Observable<any> {
      console.log(this.http.get(`${this.baseURL}/${keyword}`));
      return this.http.get(`${this.baseURL}/${keyword}`);
    }

   getFeedByTopic(topic: string): Observable<any> {
      console.log(this.http.get(`${this.baseURL}/${topic}`));
      return this.http.get(`${this.baseURL}/${topic}`);
    }

}
