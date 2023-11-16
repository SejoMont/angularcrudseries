import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Series } from '../models/series';
import { Personajes } from '../models/personajes';
@Injectable()
export class ServiceSeries {
  constructor(private _http: HttpClient) {}

  getSeries(): Observable<any> {
    var request = 'api/series';
    var url = environment.urlApiSeries + request;

    return this._http.get(url);
  }

  findSerie(id: string): Observable<any> {
    var request = 'api/series/'+id;
    var url = environment.urlApiSeries + request

    return this._http.get(url);
  }

  getPersonajesSerie(id: string):Observable<any> {
    var request = '/api/Series/PersonajesSerie/' + id;
    var url = environment.urlApiSeries + request

    return this._http.get(url);
  }

  addPersonaje(personaje: Personajes): Observable<any>{
    // debemos convertir el onjeto class departamento a json
    var json = JSON.stringify(personaje);
    // vamos a enviar un objeto json, por lo que debemos indicar
    // en la peticion el formato de dicho objeto(con headers)
    var header = new HttpHeaders().set('content-type', 'application/json');
    
    var request = 'api/personajes';
    var url = environment.urlApiSeries + request;

    return this._http.post(url, json, { headers: header });
  }
}