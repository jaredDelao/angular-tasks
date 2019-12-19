import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PadreComponent } from "./components/padre/padre.component";
import { PrincipalComponent } from "./components/principal.component";

const routes: Routes = [
  { path: "padre-hijo", component: PadreComponent },
  { path: "hermanos", component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
