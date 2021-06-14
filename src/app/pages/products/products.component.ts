import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from '../cart-page/cart.service';
import { ProductsService } from '../../services/products.service';
<<<<<<< HEAD
import { Store } from '@ngrx/store';
=======
import { props, Store } from '@ngrx/store';
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
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
<<<<<<< HEAD
    console.log('ca marche') ; 
=======
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
    this.getProducts() ; 
  
  }

getProducts () : void {
<<<<<<< HEAD
  this.store.dispatch(ProductActions.loadProduct()) ; 
=======
  this.store.dispatch(ProductActions.loadProduct({offset : '1' , limit:'2'})) ; 
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
}



}
