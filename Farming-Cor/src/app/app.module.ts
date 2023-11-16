import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule,routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PaginaPrincipalClienteComponent } from './pagina-principal-cliente/pagina-principal-cliente.component';
import { PaginaPrincipalProveedorComponent } from './pagina-principal-proveedor/pagina-principal-proveedor.component';
import { PerfilProveedorComponent } from './perfil-proveedor/perfil-proveedor.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { FormPerfilProveedorComponent } from './form-perfil-proveedor/form-perfil-proveedor.component';
import { FormPerfilUsuarioComponent } from './form-perfil-usuario/form-perfil-usuario.component';
import { FormProductoComponent } from './form-producto/form-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    RegistroComponent,
    MenuComponent,
    IniciarSesionComponent,
    PaginaPrincipalClienteComponent,
    PaginaPrincipalProveedorComponent,
    PerfilProveedorComponent,
    PerfilUsuarioComponent,
    ProductoComponent,
    FormPerfilProveedorComponent,
    FormPerfilUsuarioComponent,
    FormProductoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
