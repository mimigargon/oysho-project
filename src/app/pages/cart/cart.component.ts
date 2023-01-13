import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../core/services/cart/models/cart.interface';
import { StoreState } from '../../store/states/store.state';
import { Store } from '@ngrx/store';
import * as cartActions from '../../store/actions/cart.actions';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts!: CartProduct[];
  constructor(private store: Store<StoreState>) { }

  ngOnInit() {
    this.store.select('cart').subscribe((cart) => {
      this.cartProducts = cart?.products
    })
    this.store.dispatch(cartActions.getProducts());
  }
}

