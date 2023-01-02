import { createAction, props } from '@ngrx/store';
import { ProductDetails } from 'src/app/core/services/products/models/products.interface';

export const ActionTypes = {
  ADD_CART: '[Cart] Add products to cart',
  DELETE_CART: '[Cart] Delete products from cart',
};

export const addCart = createAction(
  ActionTypes.ADD_CART,
  props<{ product: ProductDetails }>()
);

export const deleteCart = createAction(
  ActionTypes.DELETE_CART,
);
