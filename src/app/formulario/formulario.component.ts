import { Component } from '@angular/core';
import { LoggingService } from '../loggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.Service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[]
})
export class FormularioComponent {
  
  //@Output() personaCreada!: EventEmitter<Persona>; ya no se usa mas el output porque se usa el servicio para pasar la persona al componente padre

  nombreInput: string;
  apellidoInput: string;

  constructor(private personasService: PersonasService) {
    this.apellidoInput= '';
    this.nombreInput='';
    //this.personaCreada= new EventEmitter<Persona>();
   }

  
  agregarPersona():void{
    let nuevaPersona = new Persona(this.nombreInput,this.apellidoInput);
    //this.loggingService.mostrarPorConsola("Persona creada:" + nuevaPersona.nombre + " " + nuevaPersona.apellido);
    this.personasService.addPersona(nuevaPersona);
    
    //this.personaCreada.emit(nuevaPersona); 
    
  }
}
