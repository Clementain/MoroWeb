import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  private myAppUrl = 'https://localhost:7057/';
  private myApiUrl = 'api/documento/';

  constructor(private http: HttpClient) { }

  getListDocumentos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
