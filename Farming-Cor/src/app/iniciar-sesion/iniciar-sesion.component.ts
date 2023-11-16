import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  usuario: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  iniciarSesion() {
    this.usuarioService.iniciarSesion(this.usuario, this.password).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        const tipoUsuario = response.Nom_rol;

        if (tipoUsuario === 'Proveedor') {
          console.log('Proveedor ingresado correctamente');
          alert('Proveedor ingresado correctamente');
          this.router.navigate(['/pagina-principal-proveedor']);
        } else if (tipoUsuario === 'Usuario') {
          console.log('Usuario ingresado correctamente');
          alert('Usuario ingresado correctamente');
          this.router.navigate(['/pagina-principal-cliente']);
        } else {
          console.log('Tipo de usuario desconocido: ' + tipoUsuario);
          alert('Error: Tipo de usuario desconocido: ' + tipoUsuario);
          // Manejar el caso en que el tipo de usuario no sea Proveedor ni Usuario
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión: ' + error.message);
        // Manejar el error
      }
    );
  }
}
