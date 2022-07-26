import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './lista-de-personas/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { ListaDePersonasComponent } from './lista-de-personas/lista-de-personas.component';
import { FormularioComponent } from './lista-de-personas/formulario/formulario.component';
import { FormularioCComponent } from './ejercicioCalculadora/formulario-c/formulario-c.component';
import { CalculadoraComponent } from './ejercicioCalculadora/calculadora/calculadora.component';
import { ResultadoComponent } from './ejercicioCalculadora/resultado/resultado.component';
import { ErrorComponent } from './error-component/error-component.component';

import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.Service';
import { DataService } from './servicios/data.services';
import { LoginComponent } from './login/login.component';
import { LoginService } from './servicios/login.service';
import { LoginGuard } from './servicios/loginGuard.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListaDePersonasComponent,
    FormularioComponent,
    FormularioCComponent,
    ResultadoComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingService, PersonasService, DataService, LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
