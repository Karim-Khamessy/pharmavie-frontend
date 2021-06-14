import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/pages/cart-page/cart.service';
import { Product } from 'src/app/products';
import {OrderProductActions} from 'src/app/shared/orderProducts/actions';
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 
@Component({
  selector: 'app-extended-card',
  templateUrl: './extended-card.component.html',
  styleUrls: ['./extended-card.component.css']
})
export class ExtendedCardComponent implements OnInit {
  currentRate = 4;
  @Input()
  product!: Product; 
  
  
  constructor(private cartService : CartService , private store : Store<fromOrderProduct.State>) { }

  ngOnInit(): void {
  }
  addtoCart () {
    console.log('product added to cart') ; 
<<<<<<< HEAD
    this.store.dispatch(OrderProductActions.addToCart({ product : this.product}))
=======
    this.store.dispatch(OrderProductActions.addToCart({ product : this.product , quantity : 1}))
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
  }
  

  
}
