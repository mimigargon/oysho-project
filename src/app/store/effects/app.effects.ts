import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as cartActions from '../actions/cart.actions';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartProduct } from '../../core/services/cart/models/cart.interface';
import { map, mergeMap, switchMap, tap } from 'rxjs';
import { addCartProductsSuccess } from '../actions/cart.actions';



@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions, private CartService: CartService) { }

  addCartProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(cartActions.addCartProducts),
      tap((action) => this.CartService.setProducts(action.products).pipe(
        map(() => cartActions.addCartProductsSuccess())
      ))
    )
  )


  loadCartProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(cartActions.loadCartProducts),
      switchMap(() => this.CartService.getProducts('cartProducts').pipe(
        map(products => cartActions.loadCartProductsSuccess({ products: [products] })),
      ))
    )
  )

}
