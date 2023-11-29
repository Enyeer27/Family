// En UsuarioService
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, usuario);
  }

  iniciarSesion(usuario: string, password: string, rol: string): Observable<any> {
    const body = {
      usuario: usuario,
      password: password,
      rol: rol
    };

    // Realiza la llamada al backend para autenticar al usuario
    return this.http.post(`${this.apiUrl}/autenticar`, body);
  }
}