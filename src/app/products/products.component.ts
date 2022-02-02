import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedProductToEdit:any;
  @ViewChild('close') closeButton:ElementRef;
  error: string;
  products;
  isLoading=false;
  message:string;
searchItem;
  constructor(private prod: ProductService,
               public auth: RegisterService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.isLoading=true;
    this.prod.getProducts().subscribe((res)=>{
      this.isLoading=false;
      if(!res.error){
        this.message='products fetched succesfully'
        this.products = res.products;
        setTimeout(()=>{
          this.message='';
        },5000)
      }
      else{
        this.error='could not fetch the products';
      }
    },err=>{
      this.isLoading=false;
      this.error='Server Error';
    })
  }
  onDelete(product){
    const confirmation = confirm('Are you to delete this')
if(confirmation){
    this.prod.deleteProduct(product._id).subscribe((res)=>{
      if(!res.error){
        this.products.splice(this.products.indexOf(product),1)
      }
    })
  
  }
  }
  onEditProduct(product){
    this.selectedProductToEdit=product;
  }
   onFormSubmit(){
     this.prod.updateProduct(this.selectedProductToEdit._id,this.selectedProductToEdit).subscribe((res)=>{
       console.log(res);
       if(!res.error){
       this.closeButton.nativeElement.click();
     }
     })
   }
}


