import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { DescriptionProductComponent } from './pages/description-product/description-product.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { Product } from './products';
import * as fromProduct from './shared/reducers/product.reducer' ;
import * as fromOrderProduct from './shared/reducers/orderProduct.reducers' ;  
import * as fromRoot from './reducers/index' ;
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'pharmavie-frontend';

  constructor( private state : Store<fromOrderProduct.State>, private router : Router) { 
    

  }

 
  resetPosition(event : Event){
    window.scrollTo(0,0) ; 
  }
}
