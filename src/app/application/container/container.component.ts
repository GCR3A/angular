import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  imageUrl:string  = "http://webresizer.com/images2/bird1_after.jpg";
  state:boolean = false;
  count:number = 0 ;
  message:string = 'hello' ;
  nom:string = "";
  email:string = "";
  phone:string = "";
  about:string = "";
  date: Date = new Date() ;
  personnes = [];
  heroes = [

    {id: 1 , name: 'superman'},
    {id: 2 , name:'batman'}
  ] ;
  clickEvent(){
    alert(this.state)
  }
  increment(){
  this.count = this.count + 1;
  }
  decrement(){
    this.count = this.count - 1;
  }
  display(){
    alert(this.message);
  }
  valider(){
 /*   alert( this.nom );
    let data = {name : this.nom} ; 

    console.log(data);*/
    this.personnes.push({nom:this.nom , email:this.email,phone:this.phone}) ;
  }

  constructor() { 
    console.log("construction excution ")
  }

  ngOnInit() {
    console.log("oninit excution ")
  }

}
