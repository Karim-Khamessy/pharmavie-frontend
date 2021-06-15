import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

interface RatingFormValues {
  five : boolean , 
  four : boolean , 
  three : boolean , 
  two : boolean , 
  one : boolean , 
}
 
@Component({
  selector: 'app-ratings-filter',
  templateUrl: './ratings-filter.component.html',
  styleUrls: ['./ratings-filter.component.css'], 
  providers : [
    {
      provide : NG_VALUE_ACCESSOR, 
      useExisting : forwardRef(()=> RatingsFilterComponent), 
      multi : true 
    }, 
    {
      provide : NG_VALIDATORS , 
      useExisting : forwardRef(()=> RatingsFilterComponent), 
      multi : true 
    }
  ]
})
export class RatingsFilterComponent implements ControlValueAccessor, OnDestroy {
  form : FormGroup ; 
  initialValues : RatingFormValues = {five : true, four :true , three : false , two : true , one : false} ; 
  subscriptions : Subscription[] =[] ; 
  get value(): RatingFormValues {
    return this.form.value ; 
  }
  set value (value : RatingFormValues){
    this.form.setValue(value) ; 
    this.onChange(value) ; 
    this.onTouched() ; 
  }
  constructor(private formBuilder : FormBuilder) { 
    this.form = this.formBuilder.group({
     five :[], 
     four : [], 
     three : [], 
     two : [], 
     one :[]
    }) ; 
    // this.form.setValue(this.initialValues) ; 
    console.log(this.form.value,"hedhale li aanan") ; 
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
  onChekeced : any=() =>{} ; 
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
    return this.form.valid ? null : {rating : {valide : false}} ; 
  }
}
