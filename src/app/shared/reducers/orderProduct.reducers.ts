import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/products";
import { OrderProductActions } from "../orderProducts/actions";


export const productFeatureKey = 'orderProducts' ; 
export interface State {
    products : Product [] ; 

}

const initialState: State ={
    products : [] , 

}

export const reducer = createReducer(
    initialState , 
    on(OrderProductActions.addToCart ,(state, {product, quantity}) =>  {
        const index = state.products.findIndex(pro => pro.id == (product.id)) ;
        const newProduct ={...product, 'quantity' :  quantity} 
       if ( index !== -1) 
         { 
             return ({products : [...state.products ]})  ;} 
        return ({products : [...state.products , newProduct]})
    }
    ) , 
    on(OrderProductActions.removeFromCart , (state, {product}) =>({ products : state.products.filter(pro => pro.id !== product.id )})
), 
on(OrderProductActions.ChangeQuantity,( state,{product})=>{
    const index = state.products.findIndex(item => item.id == product.id); 
    let newElements = [...state.products] ; 
     newElements.splice(index, 1, product ) ;  
    return ({products : newElements }) ; 

}) ) ; 

export const selectProducts = (state : State) => state.products ; 