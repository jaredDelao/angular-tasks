import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private _http: HttpClient) { }

  get(): Observable<any> {
    return this._http.get<any>('https://pokeapi.co/api/v2/pokemon/');
  }

}
