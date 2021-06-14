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
<<<<<<< HEAD
=======
    props<{offset : string , limit : string}>()
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
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
