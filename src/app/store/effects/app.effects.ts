import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as cartActions from '../actions/cart.actions';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartProduct } from '../../core/services/cart/models/cart.interface';
import { map, of, tap, switchMap } from 'rxjs';
import { ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { addProducts } from '../actions/cart.actions';




@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions, private CartService: CartService) { }

  saveProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(cartActions.addProducts),
      tap((action: ReturnType<typeof cartActions.addProducts>) => {
        this.CartService.setProducts([action.products])
      }),
      map(() => cartActions.addProductsSuccess())
    )
  )

  getProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(cartActions.getProducts),
      switchMap(() => this.CartService.getProducts().pipe(
        map((products: CartProduct) => cartActions.getProductsSuccess({ products }))
      ))
    )
  )

}

