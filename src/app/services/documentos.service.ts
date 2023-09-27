import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  private myAppUrl = 'http://localhost:90/';
  private myApiUrl = 'api/documento/';

  constructor(private http: HttpClient) { }

  getListDocumentos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  // documentosservice.ts

  getDocumentosByEncargadoId(encargadoId: number): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}GetDocumentosByEncargadoId?encargadoId=${encargadoId}`);
  }

}
