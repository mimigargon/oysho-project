import { CartProduct } from '../../core/services/cart/models/cart.interface';

export interface CartState {
  products: CartProduct[];
}

export const cartInitialState: CartState = {
  products: []
};
