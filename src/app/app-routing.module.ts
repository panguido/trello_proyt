import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/:id', component: UsuarioDetalleComponent },
  { path: 'tareas', component: TareasComponent },
    { path: 'proyectos', component: ProyectosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
