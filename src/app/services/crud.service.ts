import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
const apiUrl = "http://localhost:3000/"
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }



  getAllProducts(){

 return this.http.get(apiUrl+"produits")
  }
  createNewProduct(data){
    return this.http.post(apiUrl+"produits",data);

  }
  updateNewProduct(id,data){
return this.http.put(apiUrl+"produit/"+id, data);
  }
  deleteProductById(id){
return this.http.delete(apiUrl+"produit/"+id)
  }

  getProductById(id){
 return this.http.get(apiUrl+"produit/"+id)
  }
  updateProductById(id,data){
    return this.http.put(apiUrl+"produit/"+id ,data)
  }
}
