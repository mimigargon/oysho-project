import { Injectable } from '@angular/core';
import { ApiProductsService } from './api/api-products.service';
import { ApiCategories, ApiList } from './api/models/api-products.interface';
import { Products, Categories, CategoriesElements } from './models/products.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private ApiProductsService: ApiProductsService) {}

  getCategories(): Observable<CategoriesElements[]> {
    return this.ApiProductsService.getCategory().pipe(
      map((ApiCategories) => {
        return ApiCategories.categories.filter((category) => {
          return category.id !== 0;
        })
        .map((category) => ({
          id: category.id
        }))
      })
      )
  }

  getProductsList(id: string): Observable<Products[]> {
    return this.ApiProductsService.getList(id).pipe(
      map((ApiList) => {
        return ApiList.products.filter((product) => {
          return product.name !== '';
        })
        .map((product) => ({
          id: product.id,
          name: product.name,
          nameEn: product.nameEn,
          image: this.ApiProductsService.getProductImage(product),
          longDescription: product.bundleProductSummaries.detail.longDescription,
          price: product.bundleProductSummaries.detail.colors.sizes.price
        }))
      })
    )
  }

}
