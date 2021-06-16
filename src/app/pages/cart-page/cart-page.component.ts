import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from './cart.service';
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index' ; 
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products$ : Observable<Product[]> ; 
  products : Product[]=[] ;  
  constructor(private cartService : CartService, private orderService : OrderService ,private store : Store<fromOrderProduct.State>) { 
    this.products$ = this.store.select(fromRoot.selectOrderProducts) ; 
    this.products$.subscribe(res => this.products = res) ; 
    console.log(this.products$ , "hedhom eli anna ") ; 
  
    
    
  }

  ngOnInit(): void {
    
  }




}
