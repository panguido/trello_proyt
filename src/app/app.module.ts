import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
