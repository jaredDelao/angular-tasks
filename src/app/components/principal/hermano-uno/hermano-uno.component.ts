import { Component, OnInit } from '@angular/core';
import { HermanosService } from '../../../services/hermanos.service';

@Component({
  selector: 'app-hermano-uno',
  templateUrl: './hermano-uno.component.html',
  styleUrls: ['./hermano-uno.component.scss']
})
export class HermanoUnoComponent implements OnInit {

  textoInput: string;
  textoEntrante: string;

  constructor(private _mensajesService: HermanosService) { }

  ngOnInit() {
    this._mensajesService.mensajeService.subscribe((res: string) => {
      this.textoEntrante = res;
    });
  }

  enviar() {
    this._mensajesService.enviarHermanoDos(this.textoInput);
  }

}
