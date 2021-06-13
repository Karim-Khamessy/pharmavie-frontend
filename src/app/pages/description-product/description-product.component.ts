import { Component, OnChanges, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' ; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products';
import {ProductActions} from 'src/app/shared/products/actions';
import * as fromRoot from '../../reducers/index' ; 
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import {OrderProductActions} from 'src/app/shared/orderProducts/actions';
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 

@Component({
  selector: 'page-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.css']
})
export class DescriptionProductComponent implements OnInit {
  id :any ; 
   product!: Product;  
   path!: String; 

  constructor(private _Activatedroute : ActivatedRoute, private store : Store<fromProduct.State> ) { 
    this._Activatedroute.paramMap.subscribe(params=>{
      this.id  = params.get('id') ; 
      this.store.select(fromRoot.getProductById(this.id)).subscribe(item => this.product = item) ; 
      
    }) ; 
    
    
  }

  ngOnInit(): void {
    
  }

 


}
