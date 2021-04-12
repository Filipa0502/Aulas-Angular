import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { Exp2Component } from './exp2/exp2.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { EscolheAnimalComponent } from './escolhe-animal/escolhe-animal.component';
import { CookiesComponent } from './cookies/cookies.component';
import { Exp3Component } from './exp3/exp3.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AnimalReaderComponent } from './ficha-animal/animal-reader/animal-reader.component';
import { CriarAnimalComponent } from './ficha-animal/criar-animal/criar-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculadoraComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent,
    EvAndRefComponent,
    Exp2Component,
    FichaAnimalComponent,
    EscolheAnimalComponent,
    CookiesComponent,
    Exp3Component,
    AnimalReaderComponent,
    CriarAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
