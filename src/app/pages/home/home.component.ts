import { ProductsService } from './../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesElements, Products } from 'src/app/core/services/products/models/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  lastWeekCategory?: Products[];
  categoriesID?: CategoriesElements[];
 constructor(private ProductsService: ProductsService) {}

 ngOnInit(): void {
   this.getCategory();
 }

 getCategory(){
    this.ProductsService.getCategories().subscribe({
      next: (result) =>  {
        this.categoriesID = result;
        for(let id of this.categoriesID){
          if(id.name.includes("ÚLTIMA SEMANA")){
            let categoryId = id.id
            let categoryIdString = categoryId.toString();
            this.getLastWeekCategory(categoryIdString)
          }
        }
      }
    })
  }

 getLastWeekCategory(id: string) {
  this.ProductsService.getProductsList(id).subscribe({
    next: (result) => {
      this.lastWeekCategory = result;
    },
    error: (error) => {
      console.log(error)
    }

  })
 }
}
