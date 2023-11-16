import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Series } from 'src/app/models/series';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevopersonaje',
  templateUrl: './nuevopersonaje.component.html',
  styleUrls: ['./nuevopersonaje.component.css'],
})
export class NuevopersonajeComponent implements OnInit {
  @ViewChild('cajaid') cajaIdRef!: ElementRef;
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaimagen') cajaImagenRef!: ElementRef;
  @ViewChild('cajaserie') cajaSerieRef!: ElementRef;


  public series!: Array<Series>;
  constructor(private _serviceSeries: ServiceSeries) {}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response;
    });
  }

  InsertarDepartamento(): void {
    var num = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var loc = this.cajaLocalidadRef.nativeElement.value;

    var newDept = new Departamento(num, nom, loc);

    this._serviceDepartamentos.create(newDept).subscribe((response) => {
      this._router.navigate(['/']);
    });
  }
}
