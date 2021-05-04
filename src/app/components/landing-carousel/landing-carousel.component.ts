import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing-carousel.component.css'], 
  providers : [NgbCarouselConfig], 
  
})
export class LandingCarouselComponent implements OnInit {
  images =[ '../../../assets/carousel1.png'
           ,'../../../assets/carousel2.png']
 
  constructor(config : NgbCarouselConfig) {
    config.interval = 10000 ; 
   
   }

  ngOnInit(): void {
  }

}
