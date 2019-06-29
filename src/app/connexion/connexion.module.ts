import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionRoutingModule } from './connexion-routing.module';
import {ReactiveFormsModule} from '@angular/forms' ;

@NgModule({
  declarations: [LoginComponent, SignupComponent, ConnexionComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule
    ,
    ReactiveFormsModule
  ]
})
export class ConnexionModule { }
