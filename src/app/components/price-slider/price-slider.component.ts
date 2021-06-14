import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css']
})
export class PriceSliderComponent implements OnInit {
  
  minValue : number =0 ; 
  maxValue : number =100 ; 
  options : Options = {
    floor : 0 , 
    ceil : 100
  }
  constructor() { }

  ngOnInit(): void {
  }

  reset() : void {
    console.log("reset is clicked") ; 
    this.minValue= 0; 
    this.maxValue = 100; 
  }

<<<<<<< HEAD
=======
  handleSubmit (value :any): void{
    console.log(value) ; 
  }

>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
}
