import { InjectionToken } from "@angular/core";
import { Action, ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProduct from '../shared/reducers/product.reducer' ; 
import * as fromRouter from '@ngrx/router-store' ; 
import * as fromOrderProduct from '../shared/reducers/orderProduct.reducers' ; 

export interface State {
    [fromProduct.productFeatureKey] : fromProduct.State ; 
    [fromOrderProduct.productFeatureKey] : fromOrderProduct.State ; 
    router : fromRouter.RouterRequestAction<any>  ; 
}


export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<State, Action>
    >('Root reducers token', {
        factory : () =>({
        [fromProduct.productFeatureKey ] : fromProduct.reducer , 
        [fromOrderProduct.productFeatureKey] : fromOrderProduct.reducer , 
        router : fromRouter.routerReducer, 
        }), 
    }) ; 



export const selectProductState = createFeatureSelector<fromProduct.State>(
    fromProduct.productFeatureKey
    ) ; 

export const selectProducts = createSelector(
    selectProductState , 
    fromProduct.selectProducts 
)

export const selectOrderProductState = createFeatureSelector<fromProduct.State>(
    fromOrderProduct.productFeatureKey
    ) ; 

export const selectOrderProducts = createSelector(
    selectOrderProductState , 
    fromOrderProduct.selectProducts 
)

export const selectPromoProductState = createFeatureSelector<fromProduct.State>(
    fromProduct.productFeatureKey
    ) ; 

export const selectPromoProducts = createSelector(
    selectPromoProductState , 
    fromProduct.selectPromoProducts 
)
export const selectBestSellingProductState = createFeatureSelector<fromProduct.State>(
    fromProduct.productFeatureKey
    ) ; 

export const selectBestSellingProducts = createSelector(
    selectBestSellingProductState , 
    fromProduct.selectBestSellingProducts 
)


