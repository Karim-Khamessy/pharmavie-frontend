import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {
  Category =[
    {name : 'Pneumologie' , value:'pneumologie' },
  {name : 'Metabolise et nutrition' , value : 'metabolisme'}, 
{name : 'Homeopathie' , value : 'homeopathie'}, 
{name : 'Dermatologie', value : 'dermatologie'}, 
{name : 'Antalgiques' , value : 'antalgiques'}, 
{name : 'Rhumatologie' , value : 'rhumatologie'} , 
{name : 'Gastro-enterlogie' , value : 'gastro'}, 
{name : 'cardiologie et aniologie', value : 'cardiologie'}, 
{name : 'Otologie' , value : 'otologie'}] ; 
  constructor(private productServie : ProductsService) { }

  ngOnInit(): void {
  }

  navCategory(value : string) {
    this.productServie.getProductsByCategory(value).subscribe(item => console.log(item));
     
  }

}
