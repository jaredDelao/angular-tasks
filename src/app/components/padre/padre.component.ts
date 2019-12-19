import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-padre",
  templateUrl: "./padre.component.html",
  styleUrls: ["./padre.component.scss"]
})
export class PadreComponent implements OnInit {

  mensaje: string;

  mensajeRecibido: string;

  constructor() {}

  ngOnInit() {}

  enviar() {
    console.log(this.mensaje);
  }

  recibirTextoHijo(e: string) {
    this.mensajeRecibido = e;
  }
}
