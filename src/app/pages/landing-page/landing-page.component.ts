import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/products';
import { CartService } from '../cart-page/cart.service';
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import {ProductActions} from '../../shared/products/actions/index' ; 
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index' ; 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  bestSellingProducts$ : Observable<Product[]> ;
  promoProducts$ : Observable<Product[]> ;
  products$ : Observable<Product[]> ; 

  constructor(private store : Store<fromProduct.State>) {
    this.bestSellingProducts$ = this.store.select(fromRoot.selectBestSellingProducts) ; 
    this.promoProducts$ = this.store.select(fromRoot.selectPromoProducts) ; 
    this.products$ = this.store.select(fromRoot.selectOrderProducts) ; 
   }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadPromoProducts()) ; 
    this.store.dispatch(ProductActions.loadBestSellingProducts$()) ; 
  }

  
}
