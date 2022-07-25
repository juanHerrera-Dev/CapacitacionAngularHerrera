import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {

    private personas: Persona[];

    saludo = new EventEmitter<number>();

    constructor(private loggingService:LoggingService){
        this.personas= [new Persona('micky','palote'),
                        new Persona('michi','palito'),
                        new Persona('maya','paleta')
                        ];
    }

    getPersonas():Persona[]{
        return this.personas;
    }

    addPersona(personaNueva: Persona):void{
        this.loggingService.mostrarPorConsola("Persona creada:" + personaNueva.nombre + " " + personaNueva.apellido);
        this.personas.push(personaNueva);
    }
    encontrarPersona(indice:number):Persona{
        let personaI:Persona = this.personas[indice];
        return personaI;
    }
    modificarPersona(indice :number,personaE: Persona):void{
        let personaEncontrada= this.personas[indice];
        personaEncontrada.nombre= personaE.nombre;
        personaEncontrada.apellido= personaE.apellido;
    }
    eliminarPersona(indice: number):void{
        this.personas.splice(indice,1);
    }
}