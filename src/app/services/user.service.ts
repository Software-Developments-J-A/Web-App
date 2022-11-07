import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath:string=environment.basePathUser;

  actualUser!:User;


  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<User[]>(this.basePath)
  }


  setActualUser(user:any){
    this.actualUser=user;
  }

  getActualUser(){
    return this.actualUser;
  }

  getUserId(id:any){
    return this.http.get<User>(`${this.basePath}/${id}`)
  }
  
  addUser(user: User):Observable<Object> {
    return this.http.post<User>(
      `${this.basePath}`,
      user
    );
  }

  updateUser(id: any, user: User) {
    return this.http.put<User>(`${this.basePath}/${id}`, user);
  }

}
