import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
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

const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'iniciar-sesion', component:IniciarSesionComponent },
  { path: 'pagina-principal-cliente', component: PaginaPrincipalClienteComponent},
  { path: 'pagina-principal-proveedor', component: PaginaPrincipalProveedorComponent},
  { path: 'perfil-proveedor', component:PerfilProveedorComponent},
  { path: 'perfil-usuario', component:PerfilUsuarioComponent},
  { path: 'producto', component:ProductoComponent},
  { path: 'form-perfil-proveedor', component:FormPerfilProveedorComponent},
  { path: 'form-perfil-usuario', component:FormPerfilUsuarioComponent},
  { path: 'form-producto', component:FormProductoComponent},
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
];

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
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
