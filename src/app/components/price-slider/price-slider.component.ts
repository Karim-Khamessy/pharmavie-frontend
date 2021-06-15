import { Options } from '@angular-slider/ngx-slider';
import { ThisReceiver } from '@angular/compiler';
import { Component, forwardRef, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {ProductActions} from 'src/app/shared/products/actions';
import * as fromProduct from '../../shared/reducers/product.reducer' ; 



 interface PriceFormValues {
  minValue : number ; 
  maxValue : number ; 
}
@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css'], 
  providers : [
    {
      provide : NG_VALUE_ACCESSOR, 
      useExisting : forwardRef(()=> PriceSliderComponent), 
      multi : true 
    }, 
    {
      provide : NG_VALIDATORS , 
      useExisting : forwardRef(()=> PriceSliderComponent), 
      multi : true 
    }
  ]
})

export class PriceSliderComponent implements ControlValueAccessor , OnDestroy {
  form : FormGroup ; 
  subscriptions : Subscription[] = [] ;  
  options : Options = {
    floor : 0 , 
    ceil : 20, 
    step : 0.1 
  }
  get value() : PriceFormValues {
    return this.form.value ; 
  }
  set value (value : PriceFormValues){
    this.form.setValue(value) ; 
    this.onChange(value) ; 
    this.onTouched() ; 
  }
  constructor(private formBuilder : FormBuilder, private store : Store<fromProduct.State>) {
    this.form = this.formBuilder.group({
      minValue  :[], 
      maxValue : [], 
    }) ; 
    this.subscriptions.push(
      this.form.valueChanges.subscribe(value =>{
        this.onChange(value); 
        this.onTouched(); 
      })
    )
   }

 ngOnDestroy(){
   this.subscriptions.forEach(s=> s.unsubscribe()) ; 
 }
 onChange : any =()=>{} ; 
 onTouched : any=()=>{} ;
 registerOnChange(fn : any){
   this.onChange = fn ; 
 } 

 writeValue(value :any){
   if (value){
     this.value = value ; 
   }
   if (value == null ){
     this.form.reset() ; 
   }
 }

 registerOnTouched(fn : any){
   this.onTouched = fn ; 
 }
 validate(_ : FormControl){
   return this.form.valid ? null : {price : {valide : false}} ; 
 }

  handleSubmit (value :any) {
    console.log(value,"haw fel handlesumbit") ; 
    this.store.dispatch(ProductActions.filterProducts({form : value})) ; 
  }

}
