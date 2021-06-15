import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RatingsFilterComponent } from '../ratings-filter/ratings-filter.component';


interface BrandsFormValues {
  simed : boolean , 
  teriak : boolean , 
  saiph : boolean 
}
@Component({
  selector: 'app-brands-filter',
  templateUrl: './brands-filter.component.html',
  styleUrls: ['./brands-filter.component.css'] , 
  providers : [
    {
      provide : NG_VALUE_ACCESSOR, 
      useExisting : forwardRef(()=> BrandsFilterComponent), 
      multi : true 
    }, 
    {
      provide : NG_VALIDATORS , 
      useExisting : forwardRef(()=>BrandsFilterComponent), 
      multi : true 
    }
  ]
})
export class BrandsFilterComponent implements ControlValueAccessor , OnDestroy {

  form : FormGroup ; 
  subscriptions : Subscription[] = [] ; 
  get value(): BrandsFormValues {
    return this.form.value ; 
  }
  set value (value : BrandsFormValues){
    this.form.setValue(value) ; 
    this.onChange(value) ; 
    this.onTouched() ; 
  }

  constructor(private formBuilder : FormBuilder) { 
    this.form = this.formBuilder.group({
      simed : [] , 
      teriak : [] , 
      saiph : []
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
    return this.form.valid ? null : {brands : {valide : false}} ; 
  }
}
