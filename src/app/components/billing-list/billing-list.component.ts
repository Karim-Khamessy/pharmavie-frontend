import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EMPTY, observable, Observable } from 'rxjs';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit, OnChanges {
  @Input() products  :  any  ; 
  
  price : number ;  
  constructor() {
   this.price = 0 ; 
   }
   ngOnChanges(): void {
    this.calPrice() ; 
   }

  ngOnInit(): void {
   
    
  }

  calPrice(): void{
    this.price = 0 ; 
    for (let  i= 0 ; i< this.products.length ;  i++){
      this.price = this.price + this.products[i].publicPrice * this.products[i].quantity  ;  
    }
    
  }

}
