import { Component, OnInit } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { RouteReuseStrategy, Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import {Produit} from '../entities/produit.entity';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  providers:[CrudService]
})
export class GestionComponent implements OnInit {
  //title:string ;
  //description:string ;
  //price:string ;
  //product_type:string;
  idproduit :any ;
  //produit:any ={};
  produit: Produit = new Produit();
  produits
  save(){
    //let produit ={title:this.title,descrition:this.description ,price:this.price,product_type:this.product_type}
    
   // this.http.post("http://localhost:3000/produits",produit).subscribe(res => {
    this.crud.createNewProduct(this.produit).subscribe(res => {
      console.log(res)
      this.route.navigate(['/'])
    },err => {console.log(err)},()=> {console.log('complete')})
    console.log(this.produit);

  }

  constructor(private http:HttpClient, private route:Router, private route2:ActivatedRoute,private crud:CrudService) { 
    this.route2.params.subscribe(param => this.idproduit = param.id);
  }

  ngOnInit() {
    
    console.log(this.idproduit)
    //this.http.get('http://localhost:3000/produit/'+this.idproduit).subscribe(res=>{
      this.crud.getProductById(this.idproduit).subscribe(res => {
        console.log(res)
     this.produit = <Produit>res
      //this.title =this.produit.title
      ////this.description = this.produit.description
      //this.price = this.produit.price
      // this.product_type = this.produit.product_type

    })
  }
  update(){
   // let produit ={title:this.title,descrition:this.description ,price:this.price,product_type:this.product_type}
    this.crud.updateProductById(this.idproduit,this.produit).subscribe(res => {
      console.log(res)
      this.route.navigate(['/'])
    })
    
  }

}
