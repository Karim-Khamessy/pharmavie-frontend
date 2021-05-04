import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser' ; 
@Component({
  selector: 'app-shipping-item',
  templateUrl: './shipping-item.component.html',
  styleUrls: ['./shipping-item.component.css']
})
export class ShippingItemComponent implements OnInit {
@Input() title : string = 'Intigo' ; 
 @Input() image  = ''; 
  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {

  }

  

}
