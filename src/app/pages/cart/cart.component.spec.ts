import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CartComponent } from './cart.component';
import { EffectsModule } from '@ngrx/effects';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { StoreState } from '../../store/states/store.state';
import { getProducts } from '../../store/actions/cart.actions';

describe('CartComponent', () => {
  let spectator: Spectator<CartComponent>;
  let store: MockStore;

  const initialState = {
    cart: {
      products: []
    }
  };

  const createComponent = createComponentFactory({
    component: CartComponent,
    imports: [
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
    ],
    declarations: [CartComponent],
    providers: [
      provideMockStore({ initialState })
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
    store = spectator.inject(MockStore);
  })

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should select the cart products an dispatch an action on init', () => {
    spectator.component.ngOnInit();
    store.select((state: StoreState) => state.cart).subscribe(state => {
      expect(state).toBeTruthy();
      expect(spectator.component.cartProducts).toEqual(state.products);
    })
    store.dispatch(getProducts());
  });

  it('should cartProducts remain empty if cart is null', () => {
    const initialState = {
      cart: undefined
    }

    const falseInitialState = {
      cart: {
        products: null
      }
    }

    spectator.component.ngOnInit();
    expect(initialState.cart).toBeUndefined();
    expect(falseInitialState.cart.products).toBeNull();
    expect(spectator.component.cartProducts.length).toBe(0);
  });
})
