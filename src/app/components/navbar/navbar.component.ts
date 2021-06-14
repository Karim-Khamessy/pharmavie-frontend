<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/pages/cart-page/cart.service';
import { Product } from 'src/app/products';
import * as fromProduct from '../../shared/reducers/product.reducer' ; 
import * as fromRoot from '../../reducers/index' ; 
<<<<<<< HEAD
=======
import { ProductsService } from 'src/app/services/products.service';
import { ThisReceiver } from '@angular/compiler';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() items : any ; 
<<<<<<< HEAD
 
  constructor( ) { 
=======
  searchItems : any ; 
  @ViewChild("myDrop")
  myDrop!: any;  
  @ViewChild("search") search!: ElementRef ;  
  token : any ; 
  constructor( private productService : ProductsService, private route : Router) { 
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
   

  }

  ngOnInit(): void {
<<<<<<< HEAD

  }

=======
    this.token = localStorage.getItem("pharmavie_token") ; 

  }
searchItem(value : string){
  if (value.length >0){
  this.productService.searchProduct(value).subscribe((item : any)=>{
    this.searchItems = item  ; 
    this.myDrop._open = true
    if(this.searchItems?.length == 0 )
    {   
       
      this.searchItems = [{name : 'Aucun résultat'}] ;    }
    }) ; 
   
    
    }
  else {
    this.searchItems = [] ; 
  }

}

handleClose (){
  this.myDrop._open = false ;
  this.search.nativeElement.value = "" ; 

}

logout(){
  localStorage.removeItem('pharmavie_token') ; 
  this.route.navigate(["landingPage"]) ;


}
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161


}
