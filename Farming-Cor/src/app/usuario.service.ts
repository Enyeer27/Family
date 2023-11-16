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

  iniciarSesion(usuario: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/iniciar-sesion`, { usuario, password });
  }

  obtenerTipoUsuario(usuario: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tipo-usuario/${usuario}`);
  }
}
