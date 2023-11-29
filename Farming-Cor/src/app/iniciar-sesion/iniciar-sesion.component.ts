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
  rol: string = '';

  constructor(private authService: UsuarioService, private router: Router) {}

  iniciarSesion() {
    // Lógica de autenticación aquí, utiliza tu servicio de autenticación
    this.authService.iniciarSesion(this.usuario, this.password, this.rol)
      .subscribe(
        (respuesta) => {
          // Autenticación exitosa, redirige según el rol
          if (this.rol === 'Proveedor') {
            this.router.navigate(['/perfil-proveedor']);
          } else if (this.rol === 'Cliente') {
            this.router.navigate(['/pagina-principal-cliente']);
          } else {
            console.error('Rol no reconocido');
          }
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
  }
}