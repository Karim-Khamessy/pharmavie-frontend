import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/pages/cart-page/cart.service';
import { Product } from 'src/app/products';
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import * as fromRoot from '../../reducers/index' ; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() items : any ; 
 
  constructor( ) { 
   

  }

  ngOnInit(): void {

  }



}
