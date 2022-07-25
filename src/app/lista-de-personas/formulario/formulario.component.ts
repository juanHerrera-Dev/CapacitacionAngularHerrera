import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.Service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[]
})
export class FormularioComponent implements OnInit {
  
  //@Output() personaCreada!: EventEmitter<Persona>; ya no se usa mas el output porque se usa el servicio para pasar la persona al componente padre

  nombreInput: string;
  apellidoInput: string;
  indice!: number;
  modoEdicion!: number;

  constructor(private route: ActivatedRoute,private router: Router,private personasService: PersonasService) {
    this.apellidoInput= '';
    this.nombreInput='';
    //this.personaCreada= new EventEmitter<Persona>();
   }
  ngOnInit(): void {
    this.indice= this.route.snapshot.params['id'];
    this.modoEdicion= +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion != null && this.modoEdicion === 1){
      let personaAEditar:Persona =this.personasService.encontrarPersona(this.indice);
      this.nombreInput= personaAEditar.nombre;
      this.apellidoInput= personaAEditar.apellido;
    }
  }

  guardarPersona():void{
    let personaI = new Persona(this.nombreInput,this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.indice,personaI);
    }
    else{
    this.personasService.addPersona(personaI);
    }
    this.router.navigate(["/personas"]);
    //this.personaCreada.emit(personaI); 
  }
  eliminarPersona():void{
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.eliminarPersona(this.indice);
    }
    this.router.navigate(["/personas"]);
  }
}
