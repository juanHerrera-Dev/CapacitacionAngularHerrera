import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.Service';

@Component({
  selector: 'app-lista-de-personas',
  templateUrl: './lista-de-personas.component.html',
  styleUrls: ['./lista-de-personas.component.css']
})

export class ListaDePersonasComponent implements OnInit {

  personas!: Persona[];
  
  constructor(private router: Router, private personasService: PersonasService) {
    this.personasService.saludo.subscribe(
      (indice: number) => alert("el indice es: "+  indice)
    );
  }
  
  ngOnInit():void {
      this.getPersonasI();//al darle las personas por referencia siempre esta actualizado y asi se renderiza.
  }
  
  getPersonasI(){
    this.personasService.getPersonas()
      .subscribe(
        (personasBase: Persona[]) => {
           this.personas = personasBase;
           this.personasService.setPersonas(personasBase);
          }
      );
  }
   /*
   pepe(){
    this.personasService.getPersonas().subscribe(r => {
      this.personas = r
    }, error =>{

    })
   }
   */
}
