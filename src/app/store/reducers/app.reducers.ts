import { ActionReducerMap } from "@ngrx/store";
import { StoreState } from "../states/store.state";
import * as cart from './cart.reducers';
import * as loading from './loading.reducers';

export const appReducers: ActionReducerMap<StoreState> = {
    cart: cart.cartReducer,
    loading: loading.loadingReducer
}