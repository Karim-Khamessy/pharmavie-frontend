import { ElementRef, Injectable } from "@angular/core";
import { Actions, createEffect ,  ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import {ProductsService } from '../../../services/products.service' ; 
<<<<<<< HEAD
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
=======
import { map, mergeMap, catchError, switchMap, concatMap } from 'rxjs/operators';
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
import {ProductActions} from '../../products/actions/index' ; 


@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
<<<<<<< HEAD
                ofType(ProductActions.loadProduct.type),
                switchMap(()=> this.productService.getProducts()
                .pipe(
                    map(product => ProductActions.addToCart({product : product}) ), 
                    catchError(()=> EMPTY)
                )),
=======
                ofType(ProductActions.loadProduct.type), 
                concatMap((action : {offset: string , limit : string})=> { 
                    return this.productService.getProducts(action.offset,action.limit)
                .pipe(
                    map(product => ProductActions.addToCart({product : product}) ), 
                    catchError(()=> EMPTY)
                )}),
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
    )}) ;  

    loadPromotionProducts$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(ProductActions.loadPromoProducts.type),
                switchMap(()=> this.productService.getePromoProducts()
                .pipe(
<<<<<<< HEAD
                    map(product => ProductActions.addToPromoProducts({product : product}) ), 
=======
                    map(product => ProductActions.addToPromoProducts({product : product.data}) ), 
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
                    catchError(()=> EMPTY)
                )),
    )}) ;  
    loadBestSellingProducts$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(ProductActions.loadBestSellingProducts$.type),
                switchMap(()=> this.productService.getBestSellingProducts()
                .pipe(
<<<<<<< HEAD
                    map(product => ProductActions.addToBestSellingProduts({product : product}) ), 
=======
                    map(product => ProductActions.addToBestSellingProduts({product : product.data}) ), 
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
                    catchError(()=> EMPTY)
                )),
    )}) ;  


    constructor (
        private actions$ : Actions , 
        private productService : ProductsService
    ){}
}