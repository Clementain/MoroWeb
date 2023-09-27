import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramasSocialesService {

  private myAppUrl = 'http://localhost:90/';
  private myApiUrl = 'api/programasocial/';
  constructor(private http: HttpClient) { }

  getListPS(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
