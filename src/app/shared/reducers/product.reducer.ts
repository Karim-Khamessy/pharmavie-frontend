import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/products";
import { ProductActions } from "../products/actions";


export const productFeatureKey = 'product' ; 
export interface State {
    products : Product [] ; 
    promoProducts : Product [] ; 
    bestSellingProducts : Product [] ; 

}

const initialState: State ={
    products : [] , 
    promoProducts : [] , 
    bestSellingProducts : [] , 

}

export const reducer = createReducer(
    initialState , 
    on(ProductActions.addToCart ,(state, {product}) =>  {
        console.log("hedha l product eli yjina ") ; 
        return ({...state , products :  product })
    }
    ) , 
    on(ProductActions.addToPromoProducts ,(state, {product}) =>  {
        console.log("hedha l product eli yjina ") ; 
        return ({...state , promoProducts :  product })
    }
    ) , 
    on(ProductActions.addToBestSellingProduts ,(state, {product}) =>  {
        console.log("hedha l product eli yjina ") ; 
        return ({...state , bestSellingProducts :  product })
    }
    ) , 
    on(ProductActions.removeFromCart , (state, {product}) =>({...state ,  products : state.products.filter(pro => pro.id !== product.id )})
)) ; 

export const selectProducts = (state : State) => state.products ; 
export const selectPromoProducts = (state : State) => state.promoProducts ; 
export const selectBestSellingProducts = (state: State)=>state.bestSellingProducts ; 