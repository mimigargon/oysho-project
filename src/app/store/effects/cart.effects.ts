import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProducts, setProducts, addToCart } from '../actions/cart.actions';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartProduct } from '../../core/services/cart/models/cart.interface';
import { map, tap, switchMap } from 'rxjs';




@Injectable()
export class CartEffects {

  constructor(
    private actions$: Actions, private cartService: CartService) { }

  addToCart$ = createEffect(
    () => this.actions$.pipe(
      ofType(addToCart),
      switchMap((action) => this.cartService.setProducts(action.product)),
      map((products: CartProduct[]) => setProducts({ products }))
    )
  )

  getProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(getProducts),
      switchMap(() => this.cartService.getProducts().pipe(
        map((products: CartProduct[]) => setProducts({ products }))
      ))
    )
  )

}

