import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-lista-de-personas',
  templateUrl: './lista-de-personas.component.html',
  styleUrls: ['./lista-de-personas.component.css']
})

export class ListaDePersonasComponent  {

  personas: Persona[];
  
  constructor() {
    this.personas= [new Persona('micky','palote'),
                    new Persona('michi','palito'),
                    new Persona('maya','paleta')
                   ];
   }
   
   personaAgregada(persona:Persona){
      this.personas.push(persona);
   }

}
