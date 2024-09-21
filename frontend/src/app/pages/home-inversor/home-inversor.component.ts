import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from "../navbarsesion/navbarsesion.component";

@Component({
  selector: 'app-home-inversor',
  standalone: true,
  imports: [FooterComponent, NavbarsesionComponent],
  templateUrl: './home-inversor.component.html',
  styleUrl: './home-inversor.component.css'
})
export class HomeInversorComponent {

}