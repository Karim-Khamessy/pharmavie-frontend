import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products';
import * as fromRoot from "../../reducers/index" ; 
@Component({
  selector: 'app-nav-product',
  templateUrl: './nav-product.component.html',
  styleUrls: ['./nav-product.component.css']
})
export class NavProductComponent implements OnInit {
products$ :Observable<Product[]>
  constructor(private store : Store<fromRoot.State>) {
    this.products$ = this.store.select(fromRoot.selectOrderProducts) ; 

   }

  ngOnInit(): void {
  }

}
