import { Component } from '@angular/core';
import { articolo } from './Interfaces/articolo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//classe
export class AppComponent {

  title = 'AngularEsercizio1';
  articolo: articolo
  elencoArticoli=[];

  constructor(){
    this.articolo={
      titolo:"ciao",
      autore:"io",
      testo:"testuale  ",
      numApprezzamenti:0
    }
  }


  stampaParametro(valore){
    console.log("sono il padre."+valore)

  }

  inviaArticolo(articolo) {
    this.elencoArticoli.push(articolo)
  }



}
