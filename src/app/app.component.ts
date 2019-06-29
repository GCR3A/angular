import { Component } from '@angular/core';
import { employer } from './employer.class';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*Iemployer , OnInit*/
export class AppComponent  implements OnInit {
  title = 'TIJANI ';
  age = 0 ; 
  ngOnInit() {
     this.age  = new employer("tc" , "ch"  , new Date("08/10/1991") , 4566, "dev" , "dfg").get_age() ;
  }
  
}
