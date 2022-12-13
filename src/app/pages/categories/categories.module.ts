import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [CategoriesComponent];
const modules = [CommonModule, CategoriesRoutingModule, SharedModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class CategoriesModule { }
