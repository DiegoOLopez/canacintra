import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-inversor',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent],
  templateUrl: './home-inversor.component.html',
  styleUrl: './home-inversor.component.css'
})
export class HomeInversorComponent {

}