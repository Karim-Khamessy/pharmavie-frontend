import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit {
@Input() products : any ; 
  constructor() { }

  ngOnInit(): void {
  }

}
