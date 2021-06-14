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

<<<<<<< HEAD
  getProducts():Observable <Product []>{
    return this.http.get<Product []>(`${this.baseUrl}/getAll`) ; 
  }

  getePromoProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/promotions`) ; 
  }

  getBestSellingProducts () : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/bestSelling`)
  }
=======
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
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
}
