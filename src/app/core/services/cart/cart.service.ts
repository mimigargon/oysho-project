import { Injectable } from '@angular/core';
import { CartProduct } from './models/cart.interface';
import { from, map, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }


  setProducts(product: CartProduct): Observable<CartProduct[]> {
    let cartProducts: CartProduct[] = JSON.parse(localStorage.getItem('cartProducts')!) as CartProduct[] || [];
    cartProducts = [...cartProducts, product];
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    return of(cartProducts);
  }

  getProducts(): Observable<CartProduct[]> {
    return of(JSON.parse(localStorage.getItem('cartProducts')!))
  }

}
