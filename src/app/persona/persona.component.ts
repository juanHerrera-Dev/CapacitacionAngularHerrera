import { Component, Input} from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.Service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  @Input()persona!: Persona;
  @Input()indice!: number;

  constructor(private personasService: PersonasService){}
  
  emitirSaludo():void{
    this.personasService.saludo.emit(this.indice);
  }
  /*
  getEdad():number{
    return this.edad;
  }*/

}
