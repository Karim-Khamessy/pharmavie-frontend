import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  link = 'http://localhost:3000/order' ;
  constructor( private http: HttpClient ) { }

  confirmOrder (products : any) : Observable<any>{
    console.log({products : products}) ; 
    try{
      let token = localStorage.getItem("pharmavie_token") ; 
      const header  = new HttpHeaders().set('Authorization',`Bearer ${token}`) ; 
      const headers = { headers : header} ; 

    
    console.log(headers) ; 
    return this.http.post(`http://localhost:3000/order/confirm`, {products : products}, headers) 
  }catch (error){
    alert(error)
    return  new Observable ; 
  }}

}
