import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products";


export const addToCart = createAction(
    '[OrderProducts] add to cart ', 
<<<<<<< HEAD
    props<{product : Product}>()) ; 
=======
    props<{product : Product , quantity : number}>()) ; 
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161

export const removeFromCart = createAction(
    '[OrderProducts] remove item from cart' , 
    props<{product : Product}>()
); 
export const ChangeQuantity = createAction(
    '[OrderProducts] Change quantity' , 
    props<{product : Product}>()
); 

