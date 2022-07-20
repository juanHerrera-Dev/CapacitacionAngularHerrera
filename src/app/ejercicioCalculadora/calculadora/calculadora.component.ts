import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  
  
  resultadoA: number=0;
  /*
  constructor() {
      this.valorA=0;
      this.valorB=0;
      this.estadoB= false;// deberia ver como ver que haga un chequeo dinamico con los valores A y B
      this.resultado=0;
   }*/
   cargarResultado(result:number):void{
    this.resultadoA= result;
   }
  

}
