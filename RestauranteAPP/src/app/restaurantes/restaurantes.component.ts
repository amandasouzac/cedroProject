import { Component, OnInit } from '@angular/core';

import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

import { Prato } from '../prato';
import { PratoService } from '../prato.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  
  restaurantes: Restaurante[];
  pratos : Prato[];

  constructor(
    private restauranteService :  RestauranteService,
    private pratoService : PratoService
  ) { }

  ngOnInit() {
    this.getRestaurantes();
    this.getPratos();
  }

  getRestaurantes(): void{
    this.restauranteService.getRestaurantes()
        .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

  addRestaurante(RNome : string): void {
    const url = 'http://localhost:4200/restaurante-cadastro/';
    window.location.href = url;
  }

  pesquisarRestaurante(RNome : string) : void{
    if(RNome){
      const url = 'http://localhost:4200/pesquisa/' + RNome;  
      window.location.href = url;
    }

    else{
      window.confirm("Insira um nome para pesquisar");
    }
  }

  deleteRestaurante(restaurante: Restaurante) : void{
    if(window.confirm("Deseja excluir " + restaurante.RNome + " e todos os seus pratos?")){

      this.restaurantes = this.restaurantes.filter(r => r!== restaurante);
      this.restauranteService.deleteRestaurante(restaurante).subscribe(); 
      this.deletePratosdoRestaurante(restaurante.RNome);     
    }
  }

  getPratos():void{
    this.pratoService.getPratos().
                      subscribe(prato => this.pratos = prato); 
  }

  deletePratosdoRestaurante(RNome : string):void{
    this.pratos.forEach(prato => {
      if(prato.PRestaurante === RNome){
        this.pratoService.deletePrato(prato).subscribe();
      }
    })
  }

  editRestaurante(restaurante: Restaurante): void{
    this.restauranteService.editRestaurante();
  }
}
