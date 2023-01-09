import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timestamp } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ApiCategories, ApiCategoriesElement, ApiList, ApiProducts } from './models/api-products.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ApiCategories> {
    return this.http.get<ApiCategories>(`${environment.baseUrl}/category`);
  }

  getList(id: string): Observable<ApiList> {
    return this.http.get<ApiList>(`${environment.baseUrl}/category/${id}/product`)
  }

  getDetails(categoryId: string, productId: string): Observable<ApiProducts> {
    return this.http.get<ApiProducts>(`${environment.baseUrl}/category/${categoryId}/product/${productId}/detail`)
  }
}
