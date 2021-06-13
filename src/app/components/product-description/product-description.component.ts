import { Component, Input, OnInit } from '@angular/core';
import {ProductActions} from 'src/app/shared/products/actions';
import * as fromRoot from '../../reducers/index' ; 
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import {OrderProductActions} from 'src/app/shared/orderProducts/actions';
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  currentRate =3 ; 
  quantity =1 ; 
  @Input() product: any ; 
  constructor( private store : Store<fromProduct.State> ) { }

  ngOnInit(): void {
    console.log(this.product , "hedhaa eli ana kol mara ") ; 
  }
  addtoCart () {
    console.log('product added to cart') ; 
    this.store.dispatch(OrderProductActions.addToCart({ product : this.product , quantity : this.quantity}))
  }
}
