import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.css']
})
export class BestProductsComponent implements OnInit {
   @Input() products : any ; 
  constructor() { }

  ngOnInit(): void {
  }

}
