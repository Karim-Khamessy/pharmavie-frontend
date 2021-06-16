import { Component, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from '../cart-page/cart.service';
import { ProductsService } from '../../services/products.service';
import { props, Store } from '@ngrx/store';
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import {ProductActions} from '../../shared/products/actions/index' ; 
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index' ; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  filterForm! : FormGroup; 
  category : any ; 
  length : any ; 
  products$!: Observable<Product[]>; 
  orderProducts$!: Observable<Product[]> ; 
  constructor(private store : Store<fromProduct.State>,private _Activatedroute : ActivatedRoute , private productService : ProductsService,private formBuilder: FormBuilder ) { 
    this._Activatedroute.paramMap.subscribe(params=>{
      this.category  = params.get('name') ; 
      this.products$ = this.store.select(fromRoot.selectProducts) ;
      this.orderProducts$ = this.store.select(fromRoot.selectOrderProducts) ; 
      this.products$.subscribe(item => this.length =  item.length) ; 
      this.filterForm = this.formBuilder.group({
        labo : [], 
        rating : [] , 
        price : []
      })  ; 
      if (this.category == null)
      this.getProducts() 
      else 
      this.getProductsByCategory() ; 
   
      
    }) ; 
    

  }

  ngOnInit(): void {
  }

getProductsByCategory () : void {
  this.store.dispatch(ProductActions.getProductsByCategory({category : this.category})) ; 
}

getProducts () : void {
  this.store.dispatch(ProductActions.loadProduct({offset : '1' , limit:'4'})) ; 
}
handleSubmit(){
  console.log(this.filterForm.value) ; 
  this.productService.filterProducts(this.filterForm.value).subscribe(response => 
    {console.log(response) ; 
    return this.store.dispatch(ProductActions.addToCart({product : response}))}); 
  
}



}
