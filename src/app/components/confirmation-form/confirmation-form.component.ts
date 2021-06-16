import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrderService } from 'src/app/services/order.service';
import * as fromOrderProduct from '../../shared/reducers/orderProduct.reducers' ; 
import * as OrderProductActions from '../../shared/orderProducts/actions' ; 


@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.css']
})
export class ConfirmationFormComponent implements OnInit {
@Input() products : any ; 
  constructor( private orderService : OrderService , private orderProducts : Store<fromOrderProduct.State>) { }

  ngOnInit(): void {
  }

  handleOrder (){
    
    this.orderService.confirmOrder(this.products) ;
    this.orderProducts.dispatch(OrderProductActions.OrderProductActions.clearCart()) ; 
    alert('Merci de choisir Pharmavie, un email de confirmation sera envoyé') ;  
  }


}
