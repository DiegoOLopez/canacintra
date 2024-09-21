import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

}
