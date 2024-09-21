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
 clearLocalStorage() {
    // Borra todas las variables del localStorage
    localStorage.setItem('token', '')
    localStorage.setItem('id_usuario', '')
    
    // Navega a la página de inicio de sesión o a la ruta deseada
    this.router.navigate(['/login']);
  }
}

