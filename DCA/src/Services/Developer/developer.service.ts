import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from 'src/Models/Developer/developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  baseURL = 'http://localhost:8080/developer';
  deleteURL = 'http://localhost:8080/developer/deleteDeveloper';

  constructor(private http: HttpClient) { }

  getAllDevelopers(): Observable<any> {
    return this.http.get(`${this.baseURL}/getAllDeveloper`)

  }

  getDeveloper(devId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${devId}`);

  }

  updateDeveloper(developer: Developer):Observable<any> {
    return this.http.get(`${this.baseURL}/editDeveloper`)
  }

  


  deleteDeveloper(devId: number): Observable<any> {

    let url = `${this.deleteURL}/${devId}`
    return this.http.delete(url, { responseType: 'text' })

  }

  addDeveloper(developer: Developer):Observable<any> {
  return  this.http.post(`${this.baseURL}/addDeveloper`, developer,{responseType:"text"});

  }
}
