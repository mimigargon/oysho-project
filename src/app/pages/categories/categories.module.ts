import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from '../../shared/pipes/filter-product.pipe';

const components = [CategoriesComponent];
const modules = [CommonModule, CategoriesRoutingModule, SharedModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [...components, FilterProductPipe],
  imports: [...modules],
  providers: [FilterProductPipe]
})
export class CategoriesModule { }
