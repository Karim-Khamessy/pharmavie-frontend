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
   pharmacies = [
    {
      nomprenom: "Sangam Chowk",
      latitude: 27.692612,
      longitude: 81.342982
  },
  {
      nomprenom: "Kharikobot",
      latitude: 27.690227,
      longitude: 87.342671
  },
  {
      nomprenom: "Ace Instute Of management",
      latitude: 27.690693,
      longitude: 85.339581
  }
   ];
   constructor() {

  }
  getLocation():void{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.myLongitude = position.coords.longitude;
        this.myLatitude = position.coords.latitude;
        alert(this.myLatitude.toString() + this.myLongitude.toString());
      })
    } else {

    }
  }
  ngOnInit(): void {
    this.getLocation();
  }

}
