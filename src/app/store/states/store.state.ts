import { cartInitialState, CartState } from './cart.state';
import { loadingInitialState, LoadingState } from './loading.state';

export interface StoreState {
  loading: LoadingState;
  cart: CartState;
}

export const storeInitialState: StoreState = {
  loading: loadingInitialState,
  cart: cartInitialState,
};
