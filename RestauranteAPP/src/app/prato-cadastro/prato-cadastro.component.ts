import { Component, OnInit, Input} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Prato } from '../prato';
import { PratoService} from '../prato.service';

import { Restaurante } from '../Restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-prato-cadastro',
  templateUrl: './prato-cadastro.component.html',
  styleUrls: ['./prato-cadastro.component.css']
})

export class PratoCadastroComponent implements OnInit {

  restaurantes : Restaurante[];
  
  @Input() prato : Prato;

  constructor(
    private pratoService : PratoService,
    private restauranteService : RestauranteService,
    private location : Location,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPrato();
    this.getRestaurantes();
  }

  getPrato() : void {
    const PNome = this.route.snapshot.paramMap.get('PNome');

    if(PNome == "add"){
      this.prato = null;
    }

    else{
      this.pratoService.getPrato(PNome).subscribe(prato => this.prato = prato);
    }
  }

  getRestaurantes(): void{
    this.restauranteService.getRestaurantes()
        .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

  addPrato(restaurante : Restaurante, PNome : string, PPreco : number): void{
    if (!PNome || !restaurante || !PPreco){
      window.confirm("Dados inválidos, tente novamente");
      return;
    } 
    var novoprato : Prato = {
      PRestaurante : restaurante.RNome,
      PPreco : PPreco,
      PNome : PNome
    }

    this.pratoService.addPrato(novoprato as Prato).subscribe(() => this.voltar());
  }

  editPrato(PPreco : number) : void{
    
    if (!PPreco){
      window.confirm("Preço inválido, tente novamente");
      return;
    }

    this.prato.PPreco = PPreco;

    this.pratoService.editPrato(this.prato).subscribe(() => this.voltar());
  }

  voltar(): void{
    this.location.back();
  }

}
