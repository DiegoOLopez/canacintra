import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Importamos el router y el auth service
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}
