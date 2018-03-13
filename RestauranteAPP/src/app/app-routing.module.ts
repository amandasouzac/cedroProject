import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PratosComponent } from './pratos/pratos.component';
import { HomeComponent } from './home/home.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';
import { PratoCadastroComponent } from './prato-cadastro/prato-cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: HomeComponent},
  {path : 'restaurantes', component: RestaurantesComponent},
  {path : 'pratos', component: PratosComponent},
  {path : 'restaurante-cadastro', component: RestauranteCadastroComponent},
  {path : 'prato-cadastro/:PNome', component: PratoCadastroComponent},
  {path : 'pesquisa/:RNome', component: PesquisaComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRoutingModule { }
