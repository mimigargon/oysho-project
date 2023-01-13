import { Action, createReducer, on } from '@ngrx/store';
import { cartInitialState, CartState } from '../states/cart.state';
import { setProducts } from '../actions/cart.actions';

const cartReducerCreator = createReducer(
  cartInitialState,
  on(setProducts, (state, { products }) => ({ ...state, products }))
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return cartReducerCreator(state, action);
}
