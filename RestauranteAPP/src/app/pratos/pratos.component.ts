import { Component, OnInit } from '@angular/core';

import { Prato } from '../prato';
import { PratoService } from '../prato.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {

  pratos: Prato[];

  constructor(private pratoService : PratoService) { }

  ngOnInit() {
    this.getPratos();
  }

  getPratos(): void {
    this.pratoService.getPratos()
        .subscribe(pratos => this.pratos = pratos);
  }

  addPrato(): void{
    const url = 'http://localhost:4200/prato-cadastro/add';
    window.location.href = url;
  }

  deletePrato(prato: Prato) : void{
    if(window.confirm("Deseja excluir prato " + prato.PNome + "?")){
      this.pratos = this.pratos.filter(p => p!== prato);
      this.pratoService.deletePrato(prato).subscribe();
    }
  }

  editPrato(PNome : string ) : void{
    const url = 'http://localhost:4200/prato-cadastro/' + PNome;
    window.location.href = url;
  }

}
