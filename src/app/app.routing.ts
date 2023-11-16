import { HomeComponent } from "./components/home/home.component";
import { SerieComponent } from "./components/serie/serie.component";
import { PersonajesserieComponent } from "./components/personajesserie/personajesserie.component";
import { NuevopersonajeComponent } from "./components/nuevopersonaje/nuevopersonaje.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "serie/:idSerie", component: SerieComponent },
  { path: "personajes/:idSerie", component: PersonajesserieComponent },
  { path: "nuevopersonaje", component: NuevopersonajeComponent },
  { path: "modificarpersonaje", component: ModificarpersonajeComponent },
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);