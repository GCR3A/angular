import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path:'',component:ConnexionComponent
,children:[
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent}

]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
