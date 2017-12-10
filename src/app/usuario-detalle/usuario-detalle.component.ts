import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: UsuarioService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.usuario = this.service.findByName(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
