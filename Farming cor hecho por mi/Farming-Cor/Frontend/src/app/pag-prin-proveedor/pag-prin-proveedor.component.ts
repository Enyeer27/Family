import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { datosModel, perfilModel, pesosmodel, productoconpesomodel } from '../Shared/usuario.model';

@Component({ 
  selector: 'app-pag-prin-proveedor',
  templateUrl: './pag-prin-proveedor.component.html',
  styleUrls: ['./pag-prin-proveedor.component.css']
})
export class PagPrinProveedorComponent implements OnInit{
  datos: Observable <perfilModel[]> | undefined
  producto: Observable <productoconpesomodel[]> | undefined
  peso: any
  constructor (private router:Router, private usuarioService: UsuarioService) {}
  urlimagen=this.usuarioService.apiUrl+"/imagenes/"
  urlimagenp=this.usuarioService.apiUrl+"/productos/"
  ngOnInit(): void {
    const correo = sessionStorage.getItem('correo')
    if (correo) {
      console.log(correo)
      this.datos = this.usuarioService.obtenerusuarioid(correo)
      this.producto = this.usuarioService.productocorreo(correo)
      
    }
    else {
      this.router.navigate(['/bienvenido'])
    }
    // let correop = this.usuarioService.obtenercorreo()! 
    // this.datos = this.usuarioService.obtenerusuarioid(correop)
    // console.log(this.datos)
    // this.producto = this.usuarioService.mostrarproducto();
    // this.producto = this.usuarioService.obtenerProductoId(correop)
     
  }
  Borrar_producto(id:string) {
    this.usuarioService.borrarproducto(id).subscribe(data => {
      console.log(data)
      alert(data)
      window.location.reload()
    })
  }

  
  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/bienvenido'])
  }
}
