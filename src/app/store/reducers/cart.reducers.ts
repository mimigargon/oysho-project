import { Action, createReducer, on } from '@ngrx/store';
import { cartInitialState, CartState } from '../states/cart.state';
import * as cartActions from '../actions/cart.actions';

const cartReducerCreator = createReducer(
  cartInitialState,
  on(cartActions.loadCartProducts, (state => ({ ...state }))),
  on(cartActions.loadCartProductsSuccess, (state, { products }) => ({ ...state, products: [...products] })),
  on(cartActions.addCartProducts, (state, { products }) => ({ ...state, products: [...state.products, ...products] })),
  on(cartActions.addCartProductsSuccess, (state => ({ ...state }))),


);

export function cartReducer(state: CartState | undefined, action: Action) {
  return cartReducerCreator(state, action);
}
