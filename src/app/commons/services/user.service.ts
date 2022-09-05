import { UserModel } from './../models/user';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }
  createUser(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${environment.apiUser}/user`,user);
  }
  updateUser(user:UserModel,id:string):Observable<UserModel>{
    return this.http.patch<UserModel>(`${environment.apiUser}/user/${id}`,user);
  }
  getLogin(nome: string,senha: string){
    let query:HttpParams = new HttpParams();
    query = query.append('nome',String(nome));
    query = query.append('senha',String(senha))
    return this.http.get<UserModel>(`${environment.apiUser}/user/login`,{params:query});
  }
  getUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${environment.apiUser}/user`);
  }
  getUser(id:string):Observable<UserModel>{
    return this.http.get<UserModel>(`${environment.apiUser}/user/${id}`);
  }
  deleteUser(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUser}/user/${id}`);
  }
}
