import { ElementRef, Injectable } from "@angular/core";
import { Actions, createEffect ,  ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import {ProductsService } from '../../../services/products.service' ; 
import { map, mergeMap, catchError, switchMap, concatMap } from 'rxjs/operators';
import {ProductActions} from '../../products/actions/index' ; 


@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(ProductActions.loadProduct.type), 
                concatMap((action : {offset: string , limit : string})=> { 
                    return this.productService.getProducts(action.offset,action.limit)
                .pipe(
                    map(product => ProductActions.addToCart({product : product}) ), 
                    catchError(()=> EMPTY)
                )}),
    )}) ;  

    loadPromotionProducts$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(ProductActions.loadPromoProducts.type),
                switchMap(()=> this.productService.getePromoProducts()
                .pipe(
                    map(product => ProductActions.addToPromoProducts({product : product.data}) ), 
                    catchError(()=> EMPTY)
                )),
    )}) ;  
    loadBestSellingProducts$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(ProductActions.loadBestSellingProducts$.type),
                switchMap(()=> this.productService.getBestSellingProducts()
                .pipe(
                    map(product => ProductActions.addToBestSellingProduts({product : product.data}) ), 
                    catchError(()=> EMPTY)
                )),
    )}) ;  


    constructor (
        private actions$ : Actions , 
        private productService : ProductsService
    ){}
}