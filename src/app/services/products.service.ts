import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:3000/products'; 
  constructor(private http : HttpClient) { }

  getProducts():Observable <Product []>{
    return this.http.get<Product []>(`${this.baseUrl}/getAll`) ; 
  }

  getePromoProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/promotions`) ; 
  }

  getBestSellingProducts () : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/bestSelling`)
  }
}
