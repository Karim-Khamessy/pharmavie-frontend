import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.css']
})
export class ShippingMethodComponent implements OnInit {
  @Input() product: any ; 
  constructor() { }

  ngOnInit(): void {
  }

}
