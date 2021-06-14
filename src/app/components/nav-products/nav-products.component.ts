import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Product } from 'src/app/products';
=======
import { Store } from '@ngrx/store';
import { Product } from 'src/app/products';
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import {ProductActions} from '../../shared/products/actions/index' ; 


>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161

@Component({
  selector: 'app-nav-products',
  templateUrl: './nav-products.component.html',
  styleUrls: ['./nav-products.component.css']
})
export class NavProductsComponent implements OnInit {
@Input() products : any ; 
<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }
=======
  constructor( private store : Store<fromProduct.State> ) { }

  ngOnInit(): void {
  }
  getProducts () : void {
    this.store.dispatch(ProductActions.loadProduct({offset : '1' , limit:'4'})) ; 
  }
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161

}
