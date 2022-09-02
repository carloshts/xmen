import { UserModel } from './../models/user';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }
  createUser(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`https://nestjs-estudos.vercel.app/user`,user)
  }
  updateUser(user:UserModel,id:string):Observable<UserModel>{
    return this.http.patch<UserModel>(`https://nestjs-estudos.vercel.app/user/${id}`,user)
  }
  getUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${environment.apiUser}/user`)
  }
  getUser(id:string):Observable<UserModel>{
    return this.http.get<UserModel>(`${environment.apiUser}/user/${id}`)
  }
}
