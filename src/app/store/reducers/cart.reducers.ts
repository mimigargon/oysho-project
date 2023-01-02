import { Action, createReducer, on } from '@ngrx/store';
import { cartInitialState, CartState } from '../states/cart.state';
import * as cartActions from '../actions/cart.actions';

const cartReducerCreator = createReducer(
  cartInitialState,
  on(cartActions.addCart, (state, { product }) => ({ ...state, product: { ...product } })),
  on(cartActions.deleteCart, (state => ({ ...state }))),
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return cartReducerCreator(state, action);
}
