import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from "../navbarsesion/navbarsesion.component";

@Component({
  selector: 'app-opi',
  standalone: true,
  imports: [FooterComponent, NavbarsesionComponent],
  templateUrl: './opi.component.html',
  styleUrl: './opi.component.css'
})
export class OpiComponent {

}
