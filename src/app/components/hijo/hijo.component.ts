import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {  } from 'protractor';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  textoInput: string;

  @Input('texto') textoDesdePadre: string;

  @Output('enviar') textoEnviar: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  enviar() {
    this.textoEnviar.emit(this.textoInput);
  }

}
