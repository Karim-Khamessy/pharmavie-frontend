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

  getProducts(offset : string, limit: string):Observable <Product []>{
    return this.http.get<Product []>(`${this.baseUrl}/getAll`, {params : {
      offset : offset, 
      limit : limit 

    }}) ; 
  }

  getePromoProducts() : Observable<any>{
    return this.http.get(`${this.baseUrl}/promotions`) ; 
  }

  getBestSellingProducts () : Observable<any>{
    return this.http.get<Product[]>(`${this.baseUrl}/bestSelling`)
  }


  searchProduct(value : string) : Observable<any>{
    return this.http.get<Product>(`${this.baseUrl}/get/name/${value}`)
  }
}
