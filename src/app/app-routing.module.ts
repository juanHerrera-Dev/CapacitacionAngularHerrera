import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error-component/error-component.component';
import { FormularioComponent } from './lista-de-personas/formulario/formulario.component';
import { ListaDePersonasComponent } from './lista-de-personas/lista-de-personas.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './servicios/loginGuard.service';

const routes: Routes = [
  { path: '', component: ListaDePersonasComponent, canActivate:[LoginGuard]},
  { path: 'personas', component: ListaDePersonasComponent, canActivate:[LoginGuard],children: [
    { path: 'agregar', component: FormularioComponent},
    { path: ':id', component: FormularioComponent},
  ]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent}
    
]

@NgModule({
  imports: [ RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
