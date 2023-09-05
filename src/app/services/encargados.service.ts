import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EncargadosService {
  private myAppUrl = 'https://localhost:7057/';
  private myApiUrl = 'api/encargado/';
  constructor(private http: HttpClient) { }

  getListEncargados(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
