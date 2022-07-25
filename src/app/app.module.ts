import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './lista-de-personas/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { ListaDePersonasComponent } from './lista-de-personas/lista-de-personas.component';
import { FormularioComponent } from './lista-de-personas/formulario/formulario.component';
import { FormularioCComponent } from './ejercicioCalculadora/formulario-c/formulario-c.component';
import { CalculadoraComponent } from './ejercicioCalculadora/calculadora/calculadora.component';
import { ResultadoComponent } from './ejercicioCalculadora/resultado/resultado.component';
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.Service';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListaDePersonasComponent,
    FormularioComponent,
    FormularioCComponent,
    ResultadoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService,PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
