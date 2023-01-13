import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../../core/services/cart/models/cart.interface';

export const addToCart = createAction(
  '[Cart] Add Products',
  props<{ product: CartProduct }>()
)

export const getProducts = createAction(
  '[Cart] Get Products',

)

export const setProducts = createAction(
  '[Cart] Get Products Success',
  props<{ products: CartProduct[] }>()
)




