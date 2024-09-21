import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FooterComponent,  NavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
