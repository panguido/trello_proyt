import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  data: Usuario[];
  current_phone: Usuario;
  crud_operation = { is_new: false, is_visible: false };
  constructor(private service: UsuarioService) {
  }

  ngOnInit() {
    this.data = this.service.read();
    this.current_phone = new Usuario();
  }

  new() {
    this.current_phone = new Usuario();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_phone = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.save();
  }

  save() {
    if (this.crud_operation.is_new) {
      this.data.push(this.current_phone);
    }
    this.service.save(this.data);
    this.current_phone = new Usuario();
    this.crud_operation.is_visible = false;
  }
}
