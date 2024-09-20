import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-negocio',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home-negocio.component.html',
  styleUrl: './home-negocio.component.css'
})
export class HomeNegocioComponent {

}
