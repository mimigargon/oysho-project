import { Injectable } from '@angular/core';
import { CartProduct } from './models/cart.interface';
import { from, map, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }


  setProducts(product: CartProduct[]): Observable<void> {
    return new Observable(observer => {
      let currentProduct: any = localStorage.getItem('cartProducts');
      if (currentProduct === null) {
        localStorage.setItem('cartProducts', JSON.stringify([product]));
      } else {
        currentProduct = JSON.parse(currentProduct);
        currentProduct!.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(currentProduct));
      }
      observer.next();
      observer.complete();

    })
  }

  getProducts(key: string): Observable<CartProduct> {
    return new Observable(observer => {
      let product: CartProduct = JSON.parse(localStorage.getItem(key)!);
      observer.next(product);
      observer.complete();
    })
  }


}
