import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iseries } from '../models/iseries';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSeriesService {

  constructor(private _httpClient:HttpClient) { }

  getAllSeries():Observable<Iseries[]>{
    return this._httpClient.get<Iseries[]>(`${environment.baseUrl}/series`);
  }

  getSeriesById(id:number):Observable<Iseries>{
    return this._httpClient.get<Iseries>(`${environment.baseUrl}/series/${id}`);
  }
}
