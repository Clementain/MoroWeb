import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EncargadosService {
  private myAppUrl = 'http://localhost:90/';
  private myApiUrl = 'api/encargadop/';
  constructor(private http: HttpClient) { }

  getListEncargados(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
