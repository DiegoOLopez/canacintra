import { Injectable } from '@angular/core';
// Importamos el cliente HTTP
import { HttpClient } from '@angular/common/http';
// Importamos el servicio observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, {email, password});
  }

  saveToken(token: string): void{
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null{
    return localStorage.getItem('authToken')
  }

  logout(): void{
    localStorage.removeItem('authToken');
  }
}
