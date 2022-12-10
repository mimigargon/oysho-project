import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories, CategoriesElements } from '../services/products/models/products.interface';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  allCategories?: CategoriesElements[]
  constructor(private ProductsService: ProductsService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    
  }

  getAllCategories() {
    this.ProductsService.getCategories().subscribe({
      next: (result) => {
        this.allCategories = result;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
