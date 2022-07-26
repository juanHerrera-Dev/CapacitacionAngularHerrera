import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private loginService: LoginService) {
    
   }
  
  login(form: NgForm){
    const email= form.value.email;
    const password= form.value.password;
    this.loginService.login(email,password);
    console.log("login exitoso, email: "+email+" password: "+password);
  }
  

}
