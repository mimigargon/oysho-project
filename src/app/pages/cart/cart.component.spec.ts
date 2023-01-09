import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CartComponent } from './cart.component';
import { EffectsModule } from '@ngrx/effects';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;
  const initialState = {
    cart: {
      products: []
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
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

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should select the cart products an dispatch an action on init', () => {
    const spy = jest.spyOn(store, 'select').mockReturnValue(of([]));
    const action = { type: "[Cart] Get Products" };
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('cart');
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
})
