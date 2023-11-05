import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private myAppUrl = 'http://localhost:90/';
  private myApiUrl = 'api/eventop/';
  constructor(private http: HttpClient) { }
  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  }

  // Obtener las cabeceras con el token de autorización
  private getHeaders(): HttpHeaders {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }

  getListEvento(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl, { headers: this.getHeaders() });
  }
}