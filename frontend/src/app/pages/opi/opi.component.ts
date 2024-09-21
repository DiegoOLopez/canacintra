import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from '../navbarsesion/navbarsesion.component';
import { oportunidadService } from '../../servicios/oportunidad/oportunidad.service';

@Component({
  selector: 'app-opi',
  standalone: true,
  imports: [FooterComponent, NavbarsesionComponent],
  templateUrl: './opi.component.html',
  styleUrls: ['./opi.component.css']
})
export class OpiComponent implements OnInit { // Implementa OnInit
  oportunidades: any[] = []; // Arreglo para almacenar oportunidades

  constructor(private oportunidadService: oportunidadService) {}

  ngOnInit(): void { // Método que se ejecuta al iniciar el componente
    this.oportunidadService.getOportunidad().subscribe({
      next: (data) => {
        this.oportunidades = data; // Asigna los datos a la propiedad
        console.log('Oportunidades:', this.oportunidades);
      },
      error: (err) => {
        console.error('Error al obtener oportunidades:', err);
      }
    });  }

}
