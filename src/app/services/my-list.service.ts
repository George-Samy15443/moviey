import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImyList } from '../models/imy-list';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyListService {

  constructor(private _httpClient:HttpClient) { }

  getList(): Observable<ImyList[]>{
    return this._httpClient.get<ImyList[]>(`${environment.baseUrl}/myList`);
  }

  addToList(obj: ImyList): Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/myList`, obj)
  }

  remove(id:string): Observable<any>{
    return this._httpClient.delete(`${environment.baseUrl}/myList/${id}`)
  }
}
