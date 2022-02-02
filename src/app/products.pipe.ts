import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(products, searchItem){
    if(!products|| !searchItem){
  return products;
    }
  
  return products.filter((product)=>{
    return product.productName.toLowerCase().indexOf(searchItem.toLowerCase()) !==-1
  })
  }
  
  }

