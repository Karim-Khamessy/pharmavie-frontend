import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products";


export const addToCart = createAction(
    '[OrderProducts] add to cart ', 
    props<{product : Product}>()) ; 

export const removeFromCart = createAction(
    '[OrderProducts] remove item from cart' , 
    props<{product : Product}>()
); 
export const ChangeQuantity = createAction(
    '[OrderProducts] Change quantity' , 
    props<{product : Product}>()
); 

