import { Component } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-prin-cliente',
  templateUrl: './pag-prin-cliente.component.html',
  styleUrls: ['./pag-prin-cliente.component.css']
})
export class PagPrinClienteComponent {
  constructor (private router:Router, private usuarioService: UsuarioService) {}
  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/bienvenido'])
  }
}
