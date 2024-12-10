import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovies } from '../models/imovies';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  constructor(private _httpClient:HttpClient) {}

  getAllMovies():Observable<Imovies[]>{
    return this._httpClient.get<Imovies[]>(`${environment.baseUrl}/movies`);
  }

  getMoviesById(id:number):Observable<Imovies>{
    return this._httpClient.get<Imovies>(`${environment.baseUrl}/movies/${id}`);
  }
}
