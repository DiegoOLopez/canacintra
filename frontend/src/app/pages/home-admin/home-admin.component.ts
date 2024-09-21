import { Component, OnInit } from '@angular/core';
import { NavbarsesionComponent } from '../navbarsesion/navbarsesion.component';
import { CommonModule } from '@angular/common';
import { SolicitudService } from '../../servicios/solicitud/solicitud.service';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [NavbarsesionComponent,CommonModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})

export class HomeAdminComponent implements OnInit {
  soli: any[] = [];
  constructor(private SolicitudService: SolicitudService){}

  ngOnInit(): void { // Método que se ejecuta al iniciar el componente
    this.SolicitudService.getSolicitud().subscribe({
      next: (data) => {
        this.soli = data; // Asigna los datos a la propiedad
        console.log('Oportunidades:', this.soli);
      },
      error: (err) => {
        console.error('Error al obtener solicitudes:', err);
}
});}

}
