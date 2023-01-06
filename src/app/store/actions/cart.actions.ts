import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../../core/services/cart/models/cart.interface';

export const addProducts = createAction(
  '[Cart] Add Products',
  props<{ products: CartProduct }>()
)

export const addProductsSuccess = createAction(
  '[Cart] Add Products Success',
)




