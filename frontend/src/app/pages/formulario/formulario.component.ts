import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from "../navbarsesion/navbarsesion.component";
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FooterComponent, NavbarsesionComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

}
