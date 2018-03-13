import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Restaurante} from '../restaurante';
import { RestauranteService } from '../restaurante.service';

import { Prato } from '../prato';
import { PratoService } from '../prato.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {

  pratos : Prato[];

  @Input() restaurante : Restaurante;

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestauranteService,
    private pratoService : PratoService,
    private location: Location
  ) { }

  ngOnInit():void {
    this.getRestaurante();
    this.getPratosdoRestaurante();
  }

  getRestaurante(): void{
    const RNome = this.route.snapshot.paramMap.get('RNome');
    this.restauranteService.getRestaurante(RNome).subscribe(restaurante => this.restaurante = restaurante);
  }

  voltar(): void{
    const url = 'http://localhost:4200/restaurantes/';  
    window.location.href = url;
  }

  getPratosdoRestaurante():void{
    const RNome = this.route.snapshot.paramMap.get('RNome');
    this.pratoService.getPratos()
    .subscribe(pratos => this.pratos = pratos.filter(p => p.PRestaurante === RNome)); 
  }

  editRestaurante():void{
    this.restauranteService.editRestaurante();
  }

  deleteRestaurante() : void{
    if(window.confirm("Deseja excluir " + this.restaurante.RNome + " e todos os seus pratos?")){
      this.restauranteService.deleteRestaurante(this.restaurante).subscribe(() => this.voltar());   
    }
  }

}
