import { inject, Injectable } from '@angular/core';
// Importamos el cliente HTTP
import { HttpClient } from '@angular/common/http';
// Importamos el servicio observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/propuesta';  // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Devuelve un Observable para que el componente maneje la suscripción
  login(credentials: any): Observable<any> {
    return this.http.get<any>(this.apiUrl, credentials);
  }
}
