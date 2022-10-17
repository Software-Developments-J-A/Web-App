import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePathuser:string=environment.basePathuser;

  constructor(private http:HttpClient) { }

  addUsers(user: User) {
    return this.http.post<User>(this.basePathuser, user);
  }
}
