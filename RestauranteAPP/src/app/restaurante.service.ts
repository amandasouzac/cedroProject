import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Restaurante } from './restaurante';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestauranteService {

  constructor(
    private http : Http
  ) { }

  getRestaurantes(): Observable<Restaurante[]>{
    return this.http.get('/api/restaurantes/').map(res => res.json());
  }

  getRestaurante(RNome : string): Observable<Restaurante>{
    const url = `${'/api/restaurantes/?id='}${RNome}`;
    return this.http.get(url).map(res => res.json());
  }

  addRestaurante(restaurante : Restaurante): Observable<Restaurante>{
    return this.http.post('/api/restaurantes/', restaurante, httpOptions).map(res => res.json());
  }

  deleteRestaurante(restaurante : Restaurante) : Observable<Restaurante> {
    const url = `${'/api/restaurantes/?id='}${restaurante.RNome}`;
    return this.http.delete(url, httpOptions).map(res => res.json());
  }

  editRestaurante(){
    window.confirm("Serviço não disponível para restaurantes");
  }

}
