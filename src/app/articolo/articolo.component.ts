import { Component, Input, OnInit, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';
import { articolo } from '../Interfaces/articolo.interface';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {
 
 
  //inizializzazione articolo e varie funzioni
  @Input() pippo: articolo
  @Output() pippOutput=new EventEmitter<number>();
  constructor() {
    
  
  }

  
  incrementaApprezzamenti(){
    this.pippo.numApprezzamenti= this.pippo.numApprezzamenti+1;
    this.pippOutput.emit(this.pippo.numApprezzamenti);
  };


  ngOnInit(): void {
  }


  ngOnChanges(){


  }
  
}

