import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Products } from 'src/app/core/services/products/models/products.interface';
import { StoreState } from 'src/app/store/states/store.state';
import { CartProduct } from '../../../core/services/cart/models/cart.interface';
import * as cartActions from '../../../store/actions/cart.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product!: Products

  constructor(private store: Store<StoreState>) { }

  ngOnInit(): void {

  }

}
