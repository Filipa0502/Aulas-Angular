import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Preferencias } from '../classes/preferencias';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  @ViewChild('refExp') referencia : ElementRef | undefined
  constructor() { }

  ngOnInit(): void {
  }
  nome : string = "";

  name : string = "Filipa";
  changeName(event)
  {
    this.name = event.target.value;
  }

  varialvel = "ola";
  /*isfocus()
  {
    console.log("Ola");
  }*/

  arrayAnimais : Array<string> = ["cao", "gato", "papagaio", "coelho"];

  analisarReferencia()
  {
    console.log(this.referencia.nativeElement.value);
  }


  definicao : Preferencias = new Preferencias("pink","red");


}
