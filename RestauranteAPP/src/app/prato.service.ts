import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Prato } from './prato';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PratoService {

  constructor(private http : Http) { }

  getPratos(): Observable<Prato[]>{
    return this.http.get('/api/pratos/').map(res => res.json());
  }

  getPrato(PNome : string): Observable<Prato>{
    const url = `${'/api/pratos/?id='}${PNome}`;
    return this.http.get(url).map(res => res.json());
  }

  addPrato(prato : Prato): Observable<Prato>{
    console.log("ok");
    return this.http.post('/api/pratos/', prato, httpOptions).map(res => res.json());
  }

  deletePrato(prato : Prato) : Observable<Prato> {
    const url = `${'/api/pratos/?id='}${prato.PNome}`;
    return this.http.delete(url, httpOptions).map(res => res.json());
  }

  editPrato(prato : Prato) : Observable<Prato> {
    const url = `${'/api/pratos/?id='}${prato.PNome}`;
    return this.http.put(url, prato, httpOptions).map(res => res.json());
  }
}
