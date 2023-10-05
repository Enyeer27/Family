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

const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'iniciar-sesion', component:IniciarSesionComponent },
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    RegistroComponent,
    MenuComponent,
    IniciarSesionComponent
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
