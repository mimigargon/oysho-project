import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/cart.actions';


@Injectable()
export class AppEffects {

  /**
   * Your effect
   */
  // TODO: Create your own effect
  yourEffect$ = createEffect(() => this.actions$.pipe(
    ofType(actions.addCart),
  ));

  constructor(
    private actions$: Actions,
  ) { }

}
