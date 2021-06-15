import { Component, OnChanges, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' ;
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products';
import {ProductActions} from 'src/app/shared/products/actions';
import * as fromRoot from '../../reducers/index' ;
import * as fromProduct from '../../shared/reducers/product.reducer' ;
import {OrderProductActions} from 'src/app/shared/orderProducts/actions';
<<<<<<< HEAD
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 
import { ProductsService } from 'src/app/services/products.service';
=======
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ;
>>>>>>> 66ada4c560ea56c79e4f1ed5f349541c5ac9ae77

@Component({
  selector: 'page-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.css']
})
export class DescriptionProductComponent implements OnInit {
<<<<<<< HEAD
  id :any ; 
   product!: Product;  
   path!: String; 
   comments : any ; 
   token : any ; 

  constructor(private _Activatedroute : ActivatedRoute,private productService : ProductsService, private store : Store<fromProduct.State> ) { 
    this.token = localStorage.getItem('pharmavie_token') ; 
    this._Activatedroute.paramMap.subscribe(params=>{
      this.id  = params.get('id') ; 
      this.productService.searchById(this.id).subscribe(item => {
        console.log(item, "hedha l comments") ; 
        return this.product = item }) ; 
    }) ; 
    this.productService.getComments(this.id , this.token ).subscribe(res=> console.log(res, "hedhoml les messages")) ; 
    
=======
  id :any ;
   product!: Product;
   path!: String;

  constructor(private _Activatedroute : ActivatedRoute, private store : Store<fromProduct.State> ) {
    this._Activatedroute.paramMap.subscribe(params=>{
      this.id  = params.get('id') ;
      this.store.select(fromRoot.getProductById(this.id)).subscribe(item =>
        {
          console.log("🚀 ~ file: description-product.component.ts ~ line 26 ~ DescriptionProductComponent ~ constructor ~ product", item)
          return this.product = item;

        }
        ) ;


    }) ;


>>>>>>> 66ada4c560ea56c79e4f1ed5f349541c5ac9ae77
  }

  ngOnInit(): void {

  }




}
