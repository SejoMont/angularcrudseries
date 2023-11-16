import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { Series } from 'src/app/models/series';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit{
  public series!: Array<Series>;
  public personajes!: Array<Personajes>;
  constructor(private _serviceSeries: ServiceSeries) {}

  ngOnInit(): void {
    this.CargarPersonajes();
    this.CargarSeries();
  }

  CargarPersonajes(): void{
    this._serviceSeries.getPersonajes().subscribe((response) => {
      this.personajes = response;
    });
  }

  CargarSeries(): void{
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response;
    });
  }

  ModificarPersonaje(): void{
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response;
    });
  }
}
