import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:8080/user';
  constructor(private http:HttpClient) { }

  createUser(user:User):Observable<any>{
    return this.http.post(this.baseURL,user
      
      )
  }

  getUserById(userId:string):Observable<any>{
    return this.http.get(`${this.baseURL}/${userId}`)

  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseURL)

  }

  Checklogin(userCredentials:User):Observable<any>{
    return this.http.post(this.baseURL,userCredentials)
  }
}
