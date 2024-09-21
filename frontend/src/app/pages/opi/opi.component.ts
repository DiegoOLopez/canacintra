import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from '../navbarsesion/navbarsesion.component';
import { PropuestaService } from '../../servicios/oportunidad/oportunidad.service';

@Component({
  selector: 'app-opi',
  standalone: true,
  imports: [FooterComponent, NavbarsesionComponent],
  templateUrl: './opi.component.html',
  styleUrls: ['./opi.component.css'] // Cambiado de styleUrl a styleUrls
})
export class OpiComponent {
  constructor(private propuestaService: PropuestaService) {
    this.cargarPropuestas();
  }

  cargarPropuestas() {
    this.propuestaService.getOportunidad().subscribe({
      next: (data) => {
        console.log('Propuestas:', data);
      },
      error: (err) => {
        console.error('Error al obtener propuestas:', err);
      }
    });
  }
}
