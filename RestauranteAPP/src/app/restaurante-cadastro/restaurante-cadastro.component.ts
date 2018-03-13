import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Restaurante } from '../Restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-cadastro',
  templateUrl: './restaurante-cadastro.component.html',
  styleUrls: ['./restaurante-cadastro.component.css']
})
export class RestauranteCadastroComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private restauranteService : RestauranteService
  ) { }

  ngOnInit() {
  }

  addRestaurante(RNome : string) : void {
    RNome = RNome.trim();

    if (!RNome){
      window.confirm("Nome de restaurante inválido. Tente novamente");
      return;
    }
   
    this.restauranteService.addRestaurante({RNome} as Restaurante).subscribe(() => this.voltar());
  }

  voltar(): void{
    this.location.back();
  }


}
