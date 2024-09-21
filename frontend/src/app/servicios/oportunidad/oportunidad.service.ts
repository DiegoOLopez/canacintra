import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class oportunidadService {

  private apiUrl = 'http://localhost:3000/api/oprtunidad';  // Asegúrate de que esta URL sea correcta y accesible.

  constructor(private http: HttpClient) {}

  // Método para obtener propuestas desde la API
  getOportunidad(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
