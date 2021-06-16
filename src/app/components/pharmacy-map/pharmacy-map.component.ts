import { Component, Input, OnInit } from '@angular/core';
import { Pharmacie, Product } from 'src/app/products';

@Component({
  selector: 'app-pharmacy-map',
  templateUrl: './pharmacy-map.component.html',
  styleUrls: ['./pharmacy-map.component.css']
})
export class PharmacyMapComponent implements OnInit {
   myLongitude:number=0;
   myLatitude:number=0;
   @Input() product! : Product;
  
   constructor() {

  }
  getLocation():void{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.myLongitude = position.coords.longitude;
        this.myLatitude = position.coords.latitude;
  
      })
    } else {

    }
  }
  ngOnInit(): void {
    this.getLocation();
  }

}
