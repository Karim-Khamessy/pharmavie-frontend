import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from '../cart-page/cart.service';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import {ProductActions} from '../../shared/products/actions/index' ; 
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index' ; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$ : Observable<Product[] > ; 
  constructor( private store : Store<fromProduct.State> ) { 

    this.products$ = this.store.select(fromRoot.selectProducts) ;  
 
  }

  ngOnInit(): void {
    console.log('ca marche') ; 
    this.getProducts() ; 
  
  }

getProducts () : void {
  this.store.dispatch(ProductActions.loadProduct()) ; 
}



}
