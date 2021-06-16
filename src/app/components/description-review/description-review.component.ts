import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-description-review',
  templateUrl: './description-review.component.html',
  styleUrls: ['./description-review.component.css']
})
export class DescriptionReviewComponent implements OnInit {
@Input() id  : any ; 
token : any ; 
@Input() product : any ; 
@ViewChild("comment") comment! : ElementRef ; 
constructor(private productService : ProductsService) { 
    this.token = localStorage.getItem("pharmavie_token") ; 
  }

  ngOnInit(): void {
  }

  addComments(value : any) : void { 
    this.productService.addComments(value,this.id , this.token).subscribe(response =>
      { this.comment.nativeElement.value ="" ; 
        this.product.comments.push(response)}
        
        ) ;  
  }


  deleteComment(commentId : any){
    console.log(commentId, "haw eli aana tw") ; 
    this.productService.deleteCommetns(this.product.id,commentId).subscribe(
      (response) =>{
        console.log(response,"heddha mel delete") ; 
        this.product.comments = response; 
      }
    )
  }

}
