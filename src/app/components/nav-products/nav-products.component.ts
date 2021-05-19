import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-nav-products',
  templateUrl: './nav-products.component.html',
  styleUrls: ['./nav-products.component.css']
})
export class NavProductsComponent implements OnInit {
@Input() products : any ; 
  constructor() { }

  ngOnInit(): void {
  }

}
