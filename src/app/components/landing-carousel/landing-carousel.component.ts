import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing-carousel.component.css'], 
  providers : [NgbCarouselConfig]
})
export class LandingCarouselComponent implements OnInit {
  

  constructor(config : NgbCarouselConfig) {
    config.interval = 2000 ; 
    
    config.keyboard = false ; 
    config.pauseOnHover = false ; 
   }

  ngOnInit(): void {
  }

}
