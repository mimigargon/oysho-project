import { ProductsService } from './../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesElements } from 'src/app/core/services/products/models/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: CategoriesElements[];
  mumCategoryID: string;
  vacationCategoryID: string;
  constructor(private productsService: ProductsService) {
    this.categories = [];
    this.mumCategoryID = '';
    this.vacationCategoryID = '';
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.productsService.getCategories().subscribe({
      next: (result) => {
        this.categories = result
        for (let id of this.categories) {
          if (id.name.includes("MUM")) {
            this.mumCategoryID = id.id.toString();
          }
          if (id.name.includes("VACATION SHOP")) {
            this.vacationCategoryID = id.id.toString();
          }
        }

      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
