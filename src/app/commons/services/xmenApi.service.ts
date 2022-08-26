import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XmenApiService {

  constructor(
    private http:HttpClient
  ) { }

  getCharacters(name?:string):Observable<any>{
    let query:HttpParams = new HttpParams();
    if(name) query = query.append('name',name as string);
    return this.http.get<any>(`${environment.apiXmenURL}/characters`,{params:query});
  }
  getCharactersByName(name:string):Observable<any>{
    return this.http.get<any>(`${environment.apiXmenURL}/characters?name=${name}`);
  }
}
