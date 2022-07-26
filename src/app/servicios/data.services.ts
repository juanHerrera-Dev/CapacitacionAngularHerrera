import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../persona.model';
import { LoginService } from './login.service';

@Injectable()
export class DataService {
    
    constructor(private loginService:LoginService, private httpClient: HttpClient){}

    guardarPersonas(personas: Persona[]){
        let token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-a5992-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response => console.log("resultado guardar Personas: "+ response),
            error => console.log("Error al guardar Personas: "+ error)
        );
    }

    obtenerPersonas(): Observable<Persona[]>{
        let token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>('https://listado-personas-a5992-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    modificarPersona(indice: number, persona:Persona){
        let token = this.loginService.getIdToken();
        let url:string = 'https://listado-personas-a5992-default-rtdb.firebaseio.com/datos/'+indice+'.json?auth='+token;
        this.httpClient.put(url ,persona)
        .subscribe(
            response => console.log( "resultado actualizar Persona: " + response),
            error => console.log( "Error al actualizar Persona: " + error)
        );
    }

    eliminarPersona(indice: number){
        let token = this.loginService.getIdToken();
        let url:string = 'https://listado-personas-a5992-default-rtdb.firebaseio.com/datos/'+indice+'.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado actualizar Persona: " + response),
            error => console.log("Error al actualizar Persona: " + error)
        );
    }
}
