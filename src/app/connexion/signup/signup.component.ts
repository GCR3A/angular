import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform:FormGroup;


  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup(
     {name:new FormControl('',Validators.required) 
    ,password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email])
    }
    )
  }
  getstarted(){
    console.log(this.myform.value);
    localStorage.setItem('user', JSON.stringify(this.myform.value));
  }
}
