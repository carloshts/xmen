import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XmenApiService {

  constructor(
    private http:HttpClient
  ) { }

  getCharacters():Observable<any>{
    return this.http.get<any>(`${environment.apiXmenURL}/characters`);
  }
}
