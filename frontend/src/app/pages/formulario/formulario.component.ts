import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarsesionComponent } from "../navbarsesion/navbarsesion.component";
import { CommonModule } from '@angular/common';
import { PropuestaService } from '../../servicios/propuesta/propuesta.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../servicios/auth/auth.service';

// Importamos common module para usar ngIf y ngFor
// Importamos el router y el auth service
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,FooterComponent, NavbarsesionComponent, CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  constructor(private propuestaService: PropuestaService) {}
  ubicacion: string = '';
  sector: string = '';
  tiempo_operacion: string = '';
  descripcion: string = '';
  problema: string = '';
  monto: number = 0;
  plazo: number = 0;
  capacidad_pago: string = '';
  clientes: string = '';
  porcentaje_financiera: number = 0;
  porcentaje_inversionista: number = 0;

  respuesta_a_cliente: string = '';
  enviarPropuesta() {
    const propuesta = {
      id_usuario: localStorage.getItem("id_usuario"), // Cambia esto según el usuario autenticado
      fecha: new Date().toISOString(),
      ubicacion: this.ubicacion, // Asegúrate de que este campo esté en el formulario
      sector: this.sector,
      tiempo_de_operacion: this.tiempo_operacion,
      descripcion: this.descripcion,
      problema_resolver: this.problema,
      monto_solicitado: this.monto,
      plazo_seleccionado: this.plazo,
      porcentaje_financiera: this.porcentaje_financiera, // Asigna según tu lógica
      porcentaje_inversionista: 100 - this.porcentaje_financiera, // Asigna según tu lógica
      cronograma: "null", // Si es necesario
      capacidad_pago: this.capacidad_pago, // Agrega lógica para este campo
      clientes: this.clientes // Agrega lógica para este campo
    };
    console.log("Se ejecuta la funcion");

    this.propuestaService.postPropuesta(propuesta).subscribe({
      next: (response) => {
        // Manejo de la respuesta
        alert(response)
      },
      error: (err) => {
        // Manejo del error
        console.error(err);
      }
    })

    
  }
  resetFormulario() {
    this.ubicacion = '';
    this.sector = '';
    this.tiempo_operacion = '';
    this.descripcion = '';
    this.problema = '';
    this.monto = 0;
    this.plazo = 0;
    this.capacidad_pago = '';
    this.clientes = '';
    this.porcentaje_financiera = 0;
    this.respuesta_a_cliente = ''; // Opcional, si quieres limpiar también la respuesta
  }
}
