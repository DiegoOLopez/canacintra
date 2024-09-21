import { Component } from '@angular/core';
import { NavbarsesionComponent } from '../navbarsesion/navbarsesion.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NavbarsesionComponent,FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
