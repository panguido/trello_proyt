import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';

import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

const routes: Routes = [
  { path: 'Usuario', component: UsuarioComponent },
  { path: 'Usuario/:id', component: UsuarioDetalleComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
