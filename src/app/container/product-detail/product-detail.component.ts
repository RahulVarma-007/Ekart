import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()
  productListComp: ProductListComponent = undefined;

  product:Product;

  ngOnInit(){
    //we are assigning the product value here because if we assign it before initialization of this component, 
    //we still wont have the reference assigned productListComp. Hence it gives error
    this.product = this.productListComp.selectedProduct;

  }

  closeProduct(){
    this.productListComp.selectedProduct = null;
  }

  
}
