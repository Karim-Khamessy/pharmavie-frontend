import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/pages/cart-page/cart.service';
import { Product } from 'src/app/products';
import { ProductActions } from 'src/app/shared/products/actions';
import {OrderProductActions} from '../../shared/orderProducts/actions/index' ; 
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 
@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  currentRate  = 2 ; 
  @Input() 
    product!: Product ; 
    quantity =0 ; 
  
  constructor(private store : Store<fromOrderProduct.State>) { }

  ngOnInit(): void {
    this.quantity = this.product.quantity ; 
  }

  removeFromCart(){
    
    this.store.dispatch(OrderProductActions.removeFromCart({product : this.product})) ; 
  }

  handleChange() {
    console.log(this.quantity, "hedhi l quantity "); 
    this.product = {...this.product, 'quantity': this.quantity} ; 
    this.store.dispatch(OrderProductActions.ChangeQuantity({product : this.product})  ) ; 
  }
  
}
