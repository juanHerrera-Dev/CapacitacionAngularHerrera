import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./persona.model";
import { DataService } from "./servicios/data.services";

@Injectable()
export class PersonasService {

    private personas: Persona[];

    saludo = new EventEmitter<number>();

    constructor(private dataService: DataService, private loggingService:LoggingService){
        this.personas= [];
    }

    getPersonas():Observable<Persona[]>{
        return this.dataService.obtenerPersonas();
    }
    setPersonas(personasB : Persona[]):void{
        this.personas= personasB;
    }

    addPersona(personaNueva: Persona):void{
        this.loggingService.mostrarPorConsola("Persona creada:" + personaNueva.nombre + " " + personaNueva.apellido);
        if(this.personas == null){
            this.personas = []; // no entendi muy bien porque hace eso
        }
        this.personas.push(personaNueva);
        this.dataService.guardarPersonas(this.personas);
    }
    encontrarPersona(indice:number):Persona{
        let personaI:Persona = this.personas[indice];
        return personaI;
    }
    modificarPersona(indice :number,personaE: Persona):void{
        let personaEncontrada= this.personas[indice];
        personaEncontrada.nombre= personaE.nombre;
        personaEncontrada.apellido= personaE.apellido;
        this.dataService.modificarPersona(indice,personaEncontrada);
    }
    eliminarPersona(indice: number):void{
        this.personas.splice(indice,1);
        this.dataService.eliminarPersona(indice);
        this.actualizarPersonas();
    }
    actualizarPersonas(){
        //este metodo actualiza las personas en la base de datos
        this.dataService.guardarPersonas(this.personas);
    }
}