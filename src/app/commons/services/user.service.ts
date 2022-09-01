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
  createUser(user:any):Observable<any>{
    return this.http.post(`${environment.apiUser}/user`,user)
  }
  getUsers():Observable<any>{
    return this.http.get<any>(`${environment.apiUser}/user`)
  }
}
