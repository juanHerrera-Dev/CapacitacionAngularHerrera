import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';

import { ListaDePersonasComponent } from './lista-de-personas/lista-de-personas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioCComponent } from './ejercicioCalculadora/formulario-c/formulario-c.component';
import { CalculadoraComponent } from './ejercicioCalculadora/calculadora/calculadora.component';
import { ResultadoComponent } from './ejercicioCalculadora/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListaDePersonasComponent,
    FormularioComponent,
    FormularioCComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
