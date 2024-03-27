import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../Shared/usuario.service';
import { productomodel } from '../Shared/usuario.model';

@Component({
  selector: 'app-form-product-proveedor',
  templateUrl: './form-product-proveedor.component.html',
  styleUrls: ['./form-product-proveedor.component.css']
})
export class FormProductProveedorComponent implements OnInit {
  imagen: File | undefined;
  id: string = '';
  producto: productomodel = new productomodel('', '', '', '', '', '', '', '', '', 1);
  id_u: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const correo = sessionStorage.getItem('correo')
    if (correo) {
      console.log(correo)
      console.log(this.id_u !== null)
      this.usuarioService.obtenerusuarioid(correo).subscribe(data => {
        // this.id_u = data[0]["Id_Dato_Personal"]
        // console.log(data[0]["Id_Dato_Personal"])
        this.producto.Id_Dato_Personal = correo
        console.log(this.producto.Id_Dato_Personal = correo)
        console.log(this.producto.Id_Dato_Personal)
      })
      this.producto.Id_Dato_Personal = this.id_u
      console.log(this.id_u)
      // this.producto = this.usuarioService.productocorreo(correo)
      
    }
    else {
      this.router.navigate(['/bienvenido'])
    }
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('Editar');
      this.usuarioService.obtenerProductoId(this.id).subscribe(data => {
        this.producto = data[0];
      }, error => {
        console.error(error);
      });
    } else {
      console.log('Crear');
    }
  }

  selectImage(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.imagen = fileList[0];
    }
  }

  onSubmit() {
    if (!this.imagen) {
      alert('Por favor seleccione una imagen.');
      return;
    }

    let formData = new FormData();
    formData.append('file', this.imagen);

    this.usuarioService.agregarImangenp(formData).subscribe(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.producto.Url_Imagen = data.filenamep;
        if (this.producto.Id_Producto) {
          this.usuarioService.actualizaproducto(this.producto).subscribe(data => {
            alert(data);
            this.router.navigate(['/pag-prin-proveedor']);
          });
        } else {
          console.log('Crear');
          this.usuarioService.registrarProducto(this.producto).subscribe(data => {
            alert(data);
            this.router.navigate(['/pag-prin-proveedor']);
          });
        }
      }
    });
  }
}