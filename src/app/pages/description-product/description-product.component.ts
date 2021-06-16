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
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'page-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.css']
})
export class DescriptionProductComponent implements OnInit {
  id :any ; 
   product!: Product;  
   path!: String; 
   comments : any ; 
   token : any ; 
   relatedProducts : any ; 
   products$ : Observable<Product[]>

  constructor(private _Activatedroute : ActivatedRoute,private productService : ProductsService, private store : Store<fromProduct.State> ) { 
    this.token = localStorage.getItem('pharmavie_token') ; 
    this._Activatedroute.paramMap.subscribe(params=>{
      this.id  = params.get('id') ; 
      console.log(this.id,"haw l id eli aanan") ; 
      this.productService.searchById(this.id).subscribe(item => {
        console.log(item, "hedha l comments") ; 
         this.product = item  ; 
         this.productService.getProductsByCategory(item.category).subscribe(res => this.relatedProducts= res.filter((element : any)=> element.id !== this.id)) 
         ; 

        
        }) ; 
    }) ; 
    this.products$ = this.store.select(fromRoot.selectOrderProducts) ; 

    
  }

  ngOnInit(): void {

  }




}
