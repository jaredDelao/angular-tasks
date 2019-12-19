import { Component, OnInit } from '@angular/core';
import { HermanosService } from 'src/app/services/hermanos.service';

@Component({
  selector: 'app-hermano-dos',
  templateUrl: './hermano-dos.component.html',
  styleUrls: ['./hermano-dos.component.scss']
})
export class HermanoDosComponent implements OnInit {

  textoInput: string;
  textoEntrante: string;

  constructor(private _mensajesService: HermanosService) { }

  ngOnInit() {

    this._mensajesService.mensajeServiceDos.subscribe((res: string) => {
      this.textoEntrante = res;
    });

  }

  enviar() {
    this._mensajesService.manejadorMensajes.next(this.textoInput);
  }

}
