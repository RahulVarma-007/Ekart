import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name="John Smith";
  addToCart: number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any) {
    // this.name = event.target.value;
    //console.log(event.target.value);
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }

  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }

  }

  searchText: string = '';

  @ViewChild('productListComp') productListComponent: ProductListComponent;

  // prod:ProductListComponent;
  // prodSelected:Product;


  // ngAfterViewInit(){
  //   this.prod = this.productListComponent;
  //   console.log(this.prod)
  // }

  // ngAfterViewChecked(){
  //   this.prodSelected = this.productListComponent.selectedProduct;
  //   console.log(this.productListComponent);
  // }


  setSearchText(value: string){
    this.searchText = value;
  }

}
