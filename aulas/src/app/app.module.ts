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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule} from '@angular/material/card';

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
    Exp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
