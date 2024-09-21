import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from "../navbarsesion/navbarsesion.component";
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FooterComponent, NavbarsesionComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
