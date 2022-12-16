import { ProductDetails } from './../../core/services/products/models/products.interface';
import { ProductsService } from './../../core/services/products/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  categoryId?: string | null;
  productId?: string | null;
  productDetails?: ProductDetails;
  constructor(private router: Router, private route: ActivatedRoute, private ProductsService: ProductsService) {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.productId = this.route.snapshot.paramMap.get('productId')
  }

  ngOnInit(): void {
    if (this.categoryId && this.productId) {
      this.getDetail(this.categoryId, this.productId)
    }
  }


  getDetail(categoryId: string, productId: string) {
    this.ProductsService.getProductDetails(categoryId, productId).subscribe({
      next: (result) => {
        this.productDetails = result;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
