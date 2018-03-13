import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PratosComponent } from './pratos/pratos.component';
import { RestauranteService } from './restaurante.service';
import { PratoService } from './prato.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';
import { PratoCadastroComponent } from './prato-cadastro/prato-cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantesComponent,
    PratosComponent,
    HomeComponent,
    RestauranteCadastroComponent,
    PratoCadastroComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    RestauranteService,
    PratoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
