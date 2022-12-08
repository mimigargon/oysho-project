import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { CategoriesElements, Products } from 'src/app/core/services/products/models/products.interface';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList?: Products[];
  public categoriesID?: CategoriesElements[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(){
    this.productsService.getCategories().subscribe({
      next: (result) =>  {
        this.categoriesID = result;
        for(let id of this.categoriesID){
          let categoryId = id.id
          let categoryIdString = categoryId.toString();
          this.getProductsList(categoryIdString)
        }
      }
    })
  }

  getProductsList(id: string) {
    this.productsService.getProductsList(id).subscribe({
      next: (result) => {
        this.productList = result;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  
}
