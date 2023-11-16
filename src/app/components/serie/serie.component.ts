import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {

  public serie!: Series;
  constructor(
    private _serviceSeries: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros['idSerie']);
      this._serviceSeries.findSerie(id.toString()).subscribe((response) => {
        this.serie = response;
      });
    });
  }
}
