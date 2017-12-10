import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { UsuarioService } from './usuario.service';
import { TareasComponent } from './tareas/tareas.component';
import { TareaService } from './tarea.service';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { ProyectoService } from './proyecto.service';

@NgModule({
    declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioDetalleComponent,
    TareasComponent,
ProyectosComponent
  ],
  imports: [
    BrowserModule,
       FormsModule,
    AppRoutingModule
  ],
  providers: [UsuarioService,ProyectoService,TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
