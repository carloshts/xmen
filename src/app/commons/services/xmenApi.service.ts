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

  getCharacters(name?:string,pageIndex?:number,pageLimit?:number):Observable<any>{
    let query:HttpParams = new HttpParams();
    if(name) query = query.append('name',name as string);
    if(pageIndex) query = query.append('page',pageIndex);
    if(pageLimit) query = query.append('limit',pageLimit);
    return this.http.get<any>(`${environment.apiXmenURL}/characters`,{params:query});
  }
  getCharactersByName(name:string):Observable<any>{
    return this.http.get<any>(`${environment.apiXmenURL}/characters?name=${name}`);
  }
}
