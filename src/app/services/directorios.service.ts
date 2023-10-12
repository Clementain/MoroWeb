import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoriosService {

  private myAppUrl = 'http://localhost:90/';
  private myApiUrl = 'api/directoriop/';
  constructor(private http: HttpClient) { }

  getListdirectorios(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

}
