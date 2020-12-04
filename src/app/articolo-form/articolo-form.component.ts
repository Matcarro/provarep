import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {articolo2} from '../Interfaces/articolo.class';
@Component({
  selector: 'app-articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent implements OnInit {
  @Output() autore=new EventEmitter<string>();
  pippo2: articolo2=new articolo2();

  listaArticoli=[];

  constructor() { 
    this.pippo2.titolo="titolo";
    this.pippo2.autore="io";
    this.pippo2.testo="ciao";

  }



  invia(){
    this.autore.emit(this.pippo2.autore)
  }

  generaArray(){
    for(var i=0;i<9;i++){
      this.listaArticoli.push(this.pippo2);

    }

  }

  ngOnInit(): void {

    this.generaArray();
  }

}
