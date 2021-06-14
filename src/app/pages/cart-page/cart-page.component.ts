import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from './cart.service';
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index' ; 

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products$ : Observable<Product[]> ; 
 
  constructor(private cartService : CartService ,private store : Store<fromOrderProduct.State>) { 
    this.products$ = this.store.select(fromRoot.selectOrderProducts) ; 
    console.log(this.products$ , "hedhom eli anna ") ; 
 
    
  }

  ngOnInit(): void {
    
  }



}
