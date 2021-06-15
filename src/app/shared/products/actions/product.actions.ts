import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products";


export const addToCart = createAction(
    '[Products/API] add to cart ', 
    props<{product : Product[]}>()) ; 

export const removeFromCart = createAction(
    '[Products] remove item from cart' , 
    props<{product : Product}>()
); 
export const loadProduct = createAction(
    '[Products] Load Products', 
    props<{offset : string , limit : string}>()
) ; 


export const loadPromoProducts = createAction(
    '[Products] Load Promo Products' , 
) ; 
export const addToPromoProducts = createAction(
    '[Products] add to promo products ', 
    props<{product : Product[]}>()) ; 

    export const addToBestSellingProduts = createAction(
        '[Products] add to best selling products  ', 
        props<{product : Product[]}>()) ;

export const loadBestSellingProducts$ = createAction(
    '[Products] Load BestSelling Products' , 
) ; 

export const filterProducts = createAction(
    '[Products] filter products' , 
    props<{form : any}>()
) ; 

export const getProductsByCategory = createAction(
    '[Products] getProductsByCategories' , 
    props<{category : string}>()
) ; 
