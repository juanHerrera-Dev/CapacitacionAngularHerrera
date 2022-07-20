import { Component } from "@angular/core";


@Component({
    selector: 'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']
})
export class PersonasComponent{

    estadoB: boolean;
    mensaje: string;
    titulo : string;
    mostrar: boolean;

    
    constructor(){
        this.estadoB=false;
        this.mensaje= '';
        this.titulo= 'Secundario'
        this.mostrar= false;
        
    }

    agregarPersona(){
        this.mensaje = 'se ha agregado una persona'
        this.mostrar= true;
    }
    /*
    metodo ejemplo de event binding
    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }
    */
}