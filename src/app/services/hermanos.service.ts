import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HermanosService {

  manejadorMensajes = new BehaviorSubject<string>('');
  mensajeService = this.manejadorMensajes.asObservable();
  
  manejadorMensajesDos = new BehaviorSubject<string>('');
  mensajeServiceDos = this.manejadorMensajesDos.asObservable();

  constructor() {}

  enviarHermanoUno(mensaje: string) {
    this.manejadorMensajes.next(mensaje);
  }

  enviarHermanoDos(mensaje: string) {
    this.manejadorMensajesDos.next(mensaje);
  }
}
