import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from "../navbarsesion/navbarsesion.component";

@Component({
  selector: 'app-home-negocio',
  standalone: true,
  imports: [FooterComponent, NavbarsesionComponent],
  templateUrl: './home-negocio.component.html',
  styleUrl: './home-negocio.component.css'
})
export class HomeNegocioComponent {

}
