import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajesserie',
  templateUrl: './personajesserie.component.html',
  styleUrls: ['./personajesserie.component.css'],
})
export class PersonajesserieComponent implements OnInit {
  public personajes!: Array<Personajes>;
  constructor(
    private _serviceSeries: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros['idSerie']);
      this._serviceSeries.getPersonajesSerie(id.toString()).subscribe((response) => {
        this.personajes = response;
      });
    });
  }
}

