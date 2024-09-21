import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbarsesion',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbarsesion.component.html',
  styleUrl: './navbarsesion.component.css'
})
export class NavbarsesionComponent {
  constructor(private router: Router) {}

  // Función para limpiar las variables locales
  clearLocalStorage() {
    // Borra todas las variables almacenadas en localStorage
    localStorage.clear();
    alert('Sesión cerrada y variables locales eliminadas.');
    // Opcionalmente redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }
}
