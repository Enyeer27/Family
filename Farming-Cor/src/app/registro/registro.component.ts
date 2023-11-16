import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service'; // Ajusta la ruta según la ubicación real del servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Definir propiedades para cada campo del formulario
  nombre1: string = '';
  nombre2: string = '';
  apellido1: string = '';
  apellido2: string = '';
  tipodoc: string = '';
  Num_Doc: string = '';
  correo: string = '';
  tel: string = '';
  direccion: string = '';
  usuario: string = '';
  rol: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  registrarUsuario() {
    // Utilizar las propiedades del componente para recopilar datos del formulario
    const usuario = {
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      tipodoc: this.tipodoc,
      Num_Doc: this.Num_Doc,
      correo: this.correo,
      tel: this.tel,
      direccion: this.direccion,
      usuario: this.usuario,
      rol: this.rol,
      password: this.password
    };

    this.usuarioService.registrarUsuario(usuario).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente:', response);

        // Alerta sencilla
        alert('Usuario registrado exitosamente');

        this.router.navigate(['/iniciar-sesion']); // Redirige a la página de inicio de sesión
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert('Usuario Se encuenta registrado en la base de datos');
        // Puedes manejar el error aquí según tus necesidades
      }
    );
  }
}