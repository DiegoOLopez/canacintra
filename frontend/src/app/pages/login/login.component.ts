import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth/auth.service';

// Importamos common module para usar ngIf y ngFor
import { CommonModule } from '@angular/common';
// Importamos el router y el auth service
import { Router } from '@angular/router';
//import { AuthService } from '../../servicios/auth/auth.service';
// Importar el modelo de datos

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        // Almacena el token en el localStorage
        localStorage.setItem('token', response.token);
        // Redirige a otra página (ejemplo: dashboard)
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        // Manejo del error
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    });
  }
}
