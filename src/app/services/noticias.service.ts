import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private myAppUrl = 'http://localhost:90/';
  private myApiUrl = 'api/noticiap/';
  constructor(private http: HttpClient) { }

  getListNoticias(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

}
