import { ProductDetails } from './../../core/services/products/models/products.interface';
import { ProductsService } from './../../core/services/products/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StoreState } from '../../store/states/store.state';
import { Store } from '@ngrx/store';
import * as cartActions from '../../store/actions/cart.actions';
import { CartService } from '../../core/services/cart/cart.service';
import { CartProduct } from '../../core/services/cart/models/cart.interface';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  categoryId!: string | null;
  productId!: string | null;
  productDetails: ProductDetails;

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService, private store: Store<StoreState>) {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.productDetails = { id: 0, name: '', nameEn: '', image: [], longDescription: '', price: '', formattedPrice: '', color: [] }

  }

  ngOnInit(): void {
    if (this.categoryId && this.productId) {
      this.getDetail(this.categoryId, this.productId)
    }
  }


  getDetail(categoryId: string, productId: string) {
    this.productsService.getProductDetails(categoryId, productId).subscribe({
      next: (result) => {
        this.productDetails = result;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  addProduct(product: CartProduct) {
    const action = cartActions.addProducts({ products: product });
    this.store.dispatch(action);
  }


}
