import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Mi Primer App en Angular';
  
  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    
    firebase.initializeApp({
      apiKey: "AIzaSyA_Bs3-Q3Pg0yB7VkkmJmafV83_653IzgA",
      authDomain: "listado-personas-a5992.firebaseapp.com"
    })
    
  }
  salir(){
    this.loginService.logOut();
  }
  isLoged(){
    return this.loginService.isLoged();
  }
  
}
