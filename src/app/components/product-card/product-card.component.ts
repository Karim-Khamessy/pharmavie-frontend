import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product : any ; 
  sanitizer: DomSanitizer;
  constructor(sanitizer : DomSanitizer) { 
    this.sanitizer  = sanitizer ; 
  }

  ngOnInit(): void {
  }

  // photoUrl(){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.image)  ; 

  // }

}
