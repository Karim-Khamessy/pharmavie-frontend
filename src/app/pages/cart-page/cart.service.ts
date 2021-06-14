import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];  

  constructor() { }

  addToCart(product : Product) {
    console.log(product, "hedha eli yjinne") ; 
    this.items.push(product) ; 
    console.log(this.items); 
  }

  getItems ()  : Product [] {
    return this.items ; 
  }

  deleteItem( product : Product) {
    this.items = this.items.filter(item => item.id === product.id) ; 
    
  }

  clearCart() : Product [] {
    this.items =[] ; 
    return this.items ; 
  }
}
