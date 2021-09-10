import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response} from 'src/Models/Response/response'

@Injectable({
  providedIn: 'root'
})
export class ResponsesService {
  baseURL = 'http://localhost:8080/developerCommunity/response/save';
  getrespURL = 'http://localhost:8080/developerCommunity/response';
  deleteURL = 'http://localhost:8080/developerCommunity/response/delete';
  feedURL = 'http://localhost:8080/developerCommunity/response/feed';
  developerURL = 'http://localhost:8080/developerCommunity/response/developer';
  updateURL = 'http://localhost:8080/developerCommunity/response/update';

  constructor(private http:HttpClient) { }

  createResponse(response:Response):Observable<any>{
    return this.http.post(this.baseURL,response,{responseType:'text'})
  }

  //----> /getResponse/respId
  getResponse(respId: number): Observable<any> {
    return this.http.get(`${this.getrespURL}/${respId}`);

    }

  updateResponse(response:Response):Observable<any>{
    return this.http.put(`${this.updateURL}`,response,{responseType : 'text'})
  }

  deleteResponse(respId:number):Observable<any>{
    let url =(`${this.deleteURL}/${respId}`)
    return this.http.delete(url,{responseType:'text'})
  }

  getResponseByFeed(feedId:number):Observable<any>{
    return this.http.get(`${this.feedURL}/${feedId}`)

  }
  getResponseByDeveloper(devId:number):Observable<any>{
    return this.http.get(`${this.developerURL}/${devId}`)

  }
}
