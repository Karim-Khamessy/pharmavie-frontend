import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-description-review',
  templateUrl: './description-review.component.html',
  styleUrls: ['./description-review.component.css']
})
export class DescriptionReviewComponent implements OnInit {
@Input() id  : any ; 
token : any ; 
  constructor(private productService : ProductsService) { 
    this.token = localStorage.getItem("pharmavie_token") ; 
  }

  ngOnInit(): void {
  }

  addComments(value : any) : void {
    console.log(value ,"hedha elu bch nzidouh ") ; 
    this.productService.addComments(value,this.id , this.token).subscribe(response => console.log(response)) ; 
  }

}
