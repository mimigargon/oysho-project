import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiCategories, ApiCategoriesElement, ApiList, ApiProducts } from './models/api-products.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiProductsService  {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<ApiCategories> {
    return this.http.get<ApiCategories>(`${environment.baseUrl}/category`);
  }

  getList(id: string): Observable<ApiList> {
    return this.http.get<ApiList>(`${environment.baseUrl}/category/${id}/product`)
  }

  getDetails(categoryId: string, productId: string): Observable<ApiProducts> {
    return this.http.get<ApiProducts>(`${environment.baseUrl}/cateogry/${categoryId}/product/${productId}/detail`)
  }

  getProductImage(product: ApiProducts) {
    console.log(product.bundleProductSummaries)
    return this.http.get(`${environment.imageBaseUrl}${product.bundleProductSummaries.detail.xmedia.path}${product.bundleProductSummaries.detail.xmedia.xmediaItems.medias.idMedia}_0.jpg?t=${product.bundleProductSummaries.detail.xmedia.xmediaItems.medias.timestamp}`)
  }
}
