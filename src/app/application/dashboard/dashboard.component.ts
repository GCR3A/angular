import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
produits :any 
  constructor(private http:HttpClient, private route:Router,private crud:CrudService) { }

  ngOnInit() {
    //swal("hello world");
    // this.crud.getAllProducts().subscribe(res => {
    // //this.http.get('http://localhost:3000/produits').subscribe(res => {
    //   this.produits = res 
    //   console.log(this.produits)
    // })
    this.getAll();

  }
  gestion(produit){
    /*this.http.get('http://localhost:3000/produits').subscribe(res => {
      this.produits = res 
    })*/
      console.log(produit);
      this.route.navigate(['/gestion',produit])
    
  }
  delete(produit){
    // swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this imaginary file!",
    //   icon: "warning",
    //   buttons: [true,true],
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //     this.crud.deleteProductById(produit).subscribe(res=>{
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //       this.getAll();
    //     })
       
    //   } else {
    //     swal("Your imaginary file is safe!");
    //   }
    // });
    // this.crud.getAllProducts().subscribe(res => {
    //   //this.http.get('http://localhost:3000/produits').subscribe(res => {
    //     this.produits = res 
    //     console.log(this.produits)
    //   })
    // this.crud.deleteProductById(produit).subscribe(res=>{
    //   swal("Poof! Your imaginary file has been deleted!", {
    //     icon: "success",
    //   });
    //   this.getAll();
    // })
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.crud.deleteProductById(produit).subscribe(res=>{
  
          this.getAll();
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    console.log(produit);
  }
  getAll(){
    this.crud.getAllProducts().subscribe(res => {
      //this.http.get('http://localhost:3000/produits').subscribe(res => {
        this.produits = res 
        console.log(this.produits)
      })
  

  }

}
