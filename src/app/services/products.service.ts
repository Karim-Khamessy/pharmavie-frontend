import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  searchById (id : string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/get/${id}`) ; 
  }

  getProductsByCategory(value : string) : Observable<any>{
    return this.http.get<Product[]>(`${this.baseUrl}/get/category/${value}`) ; 
  }

  filterProducts(value : any) : Observable<any>{
    console.log(value, "hedhi el youssel") ; 
    let labo = null  ; 
    let rating = null  ; 
    let minValue = null ; 
    if (value.labo !== null){
      value.labo.simed == true ? labo='simed' : null ; 
      value.labo.saiph == true ? labo='saiph' : null ; 
      value.labo.teriak == true ? labo='teriak' : null ; 
    }
    if(value.rating !==null){
    value.rating.five == true ? rating=5 : null ; 
    value.rating.four == true ? rating=4 : null ; 
    value.rating.three ==true ? rating=3 : null ; 
    value.rating.two ==true ? rating=2 : null ; 
    value.rating.one ==true ? rating=1 : null ;
    }
    value.price.minValue !== 0 ? minValue= value.price.minValue : null ;   
    console.log(minValue,rating, labo ,'hedhim les params') ; 
    return this.http.get<Product[]>(`${this.baseUrl}/get/${minValue}/${value.price.maxValue}/${labo}/${rating}`)
  }


  addComments(value : any , id : any , token : any) : Observable<any>{
    const header  = new HttpHeaders().set('Authorization',`Bearer ${token}`) ; 
    const headers = { headers : header} ;
    return this.http.post(`${this.baseUrl}/add-comment/${id}`,  {text : value} ,headers) ; 
  }

  getComments(id : any, token  :any) : Observable<any>{
    const header  = new HttpHeaders().set('Authorization',`Bearer ${token}`) ; 
    const headers = { headers : header} ;
    return this.http.get(`${this.baseUrl}/comments/${id}`,headers) ; 
  }
}
