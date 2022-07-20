import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada!: EventEmitter<Persona>;

  nombreInput: string;
  apellidoInput: string;

  constructor() {
    this.apellidoInput= '';
    this.nombreInput='';
    this.personaCreada= new EventEmitter<Persona>();
   }

  
  agregarPersona():void{
    let nuevaPersona = new Persona(this.nombreInput,this.apellidoInput);
    this.personaCreada.emit(nuevaPersona);
    
  }
}
