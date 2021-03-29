import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exp3',
  templateUrl: './exp3.component.html',
  styleUrls: ['./exp3.component.css']
})
export class Exp3Component implements OnInit {

  @Output () passaInfo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  evHapp()
  {
    this.passaInfo.emit("Carregou no btn");
  }

}
