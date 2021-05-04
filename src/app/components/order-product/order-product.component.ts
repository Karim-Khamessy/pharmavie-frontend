import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  currentRate  = 2 ; 
  constructor() { }

  ngOnInit(): void {
  }

}
