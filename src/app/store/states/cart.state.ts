import { Products } from "src/app/core/services/products/models/products.interface";

export interface CartState {
  product: Products | undefined;
}

export const cartInitialState: CartState = {
  product: undefined
};
