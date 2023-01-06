import { Injectable } from '@angular/core';
import { CartProduct } from './models/cart.interface';
import { from, map, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }


  setProducts(products: CartProduct[]): void {
    let currentProduct = localStorage.getItem('cartProducts');
    if (currentProduct) {
      products = [...JSON.parse(currentProduct), ...products]
    }
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }

}
