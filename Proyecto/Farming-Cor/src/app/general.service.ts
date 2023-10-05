import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para registrar un usuario
  registrarUsuario(usuarioData: any): Observable<any> {
    const url = `${this.baseUrl}/registrarUsuario`; // Reemplaza con la ruta adecuada en tu backend
    return this.http.post(url, usuarioData);
  }

  // Agrega aquí otros métodos para interactuar con tu backend, por ejemplo, obtener datos, actualizar, eliminar, etc.
}
