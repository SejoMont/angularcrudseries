import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { ServiceSeries } from './services/service.series';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesserieComponent } from './components/personajesserie/personajesserie.component';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SerieComponent,
    PersonajesserieComponent,
    NuevopersonajeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders, ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
