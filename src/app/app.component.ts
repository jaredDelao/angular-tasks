import { Component, OnInit } from "@angular/core";
import { ServicioApiService } from "./services/servicio-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  title = "pruebas";
  pokemonList: Array<any> = [];

  constructor(private _serviceApi: ServicioApiService) {}

  ngOnInit(): void {
    this._serviceApi.get().subscribe( (res: any) => {
      let filter = res.results.filter((f: any) => { return f.name.length > 7 })
      this.pokemonList = filter;
    });
  }
}
