import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-c',
  templateUrl: './formulario-c.component.html',
  styleUrls: ['./formulario-c.component.css']
})
export class FormularioCComponent {
  
  @Output() sumaLista:EventEmitter<number> = new EventEmitter<number>();

  valorA!: number;
  valorB!: number;
  //estadoB: boolean = false;

  constructor() { }
  
  sumar():void{
    let resultado =this.valorA + this.valorB;
    this.sumaLista.emit(resultado);
  }

}
