import { Component } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private generalService: GeneralService) { }

  // Método para registrar un usuario
  registrarUsuario(usuarioData: any) {
    this.generalService.registrarUsuario(usuarioData).subscribe(
      (response) => {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
        console.log('Usuario registrado con éxito', response);
      },
      (error) => {
        // Manejar los errores, por ejemplo, mostrar un mensaje de error
        console.error('Error al registrar usuario', error);
      }
    );
  }

  // Agrega aquí la lógica para recopilar los datos del formulario y llamar a registrarUsuario
}