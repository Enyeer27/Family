import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../Shared/usuario.service'; 

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {
  correo: string = '';

  constructor(private authService: UsuarioService, private router: Router) {}

  validarCorreo() {
    console.log('Validando correo:', this.correo);
    
    // Verificar si el campo de correo está vacío
    if (this.correo.trim() === '') {
      console.log('El campo de correo está vacío');
      alert('Por favor, ingresa un correo electrónico');
      return;
    }
    
    // Realizar la validación del correo en el backend
    this.authService.validarCorreo(this.correo)
      .subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          if (response.length > 0) { // Si la respuesta contiene datos, el correo está registrado
            console.log('El correo es válido:', response);
            // Redirigir solo si el correo está registrado
            this.router.navigate(['/nueva-password']);
          } else {
            console.log('El correo no está registrado.');
            alert('Correo electrónico no registrado');
          }
        },
        (error) => {
          console.error('Error al validar el correo:', error);
          alert('Error al validar el correo');
        }
      );
  }
}
