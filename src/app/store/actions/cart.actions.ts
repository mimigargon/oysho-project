import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../../core/services/cart/models/cart.interface';

export const addCartProducts = createAction(
  '[Add Cart Product] Products added to cart',
  props<{ products: CartProduct[] }>()
);

export const addCartProductsSuccess = createAction(
  '[Add Cart Products Success] Products added to cart successfully',

)

export const loadCartProducts = createAction(
  '[Load Cart Products] Products loaded to cart',

);
export const loadCartProductsSuccess = createAction(
  '[Load Cart Products Success] Products loaded to cart successfully',
  props<{ products: CartProduct[] }>()
);





