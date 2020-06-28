import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projet } from '../projet.model';
@Injectable({
  providedIn: 'root',
})
export class AnomalieService {
  constructor(private http: HttpClient) {}
  private apiurl = 'http://localhost:8000/api/projects'; // URL to web api

  getData() {
    return this.http.get<Projet[]>(this.apiurl);
  }
}
