import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
data: Usuario[];
  constructor()
   { 
this.data= JSON.parse(localStorage.getItem('usuario') || '[]');
}

 read() {
    this.data = JSON.parse(localStorage.getItem('usuario') || '[]');
    return this.data;
  }

  save(data: Usuario[]) {
    this.data = data;
    localStorage.setItem('usuario', JSON.stringify(this.data));
  }

  findByName(id: number) {
    return this.data.find(x => x.id == id);
  }

}
