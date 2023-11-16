import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { Series } from 'src/app/models/series';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {
  @ViewChild('cajapersonaje') cajaPersonajeRef!: ElementRef;
  @ViewChild('cajaserie') cajaSerieRef!: ElementRef;

  public series!: Array<Series>;
  public personajes!: Array<Personajes>;
  constructor(
    private _serviceSeries: ServiceSeries,
    private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CargarPersonajes();
    this.CargarSeries();
  }

  CargarPersonajes(): void {
    this._serviceSeries.getPersonajes().subscribe((response) => {
      this.personajes = response;
    });
  }

  CargarSeries(): void {
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response;
    });
  }

  ModificarPersonaje(): void {
    var per = parseInt(this.cajaPersonajeRef.nativeElement.value);
    var ser = parseInt(this.cajaSerieRef.nativeElement.value);

    this._serviceSeries.modificarPersonaje(per, ser).subscribe((response) => {
      console.log(response)
    });
  }
}
