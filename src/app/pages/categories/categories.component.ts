import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { CategoriesElements, Products } from 'src/app/core/services/products/models/products.interface';
import { ProductsService } from '../../core/services/products/products.service';
import { FilterProductPipe } from '../../shared/pipes/filter-product.pipe';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public productList!: Products[];
  public categoriesID: string;
  public filter: string = "";
  public sort!: string;
  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) {
    this.categoriesID = this.route.snapshot.paramMap.get('categoryId') || '';
  }

  ngOnInit(): void {
    if (this.categoriesID) {
      this.getProductsList(this.categoriesID)
    }

  }

  getProductsList(id: string) {
    this.productsService.getProductsList(id).subscribe({
      next: (result) => {
        this.productList = result;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  onSort(event: any) {
    this.productList = [...this.productList.sort((a, b) => {
      if (event === 'highPrice') {
        return +b.price - +a.price;
      }
      return 1;
    })]
    this.productList = [...this.productList.sort((a, b) => {
      if (event === 'lowPrice') {
        return +a.price - +b.price;
      }
      return 1;
    })]
    this.productList = [...this.productList.sort((a, b) => {
      if (event === 'Name') {
        return a.name < b.name ? 1 : -1;
      }
      return 1;
    })]
    return this.productList;
  }

}
