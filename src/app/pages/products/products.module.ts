import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

const components = [ProductsComponent];
const modules = [CommonModule, ProductsRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class ProductsModule {}
