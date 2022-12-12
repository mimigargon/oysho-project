import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: ':categoryId',
    component: ProductsComponent,
  },
  {
    path: `:categoryId/detail`, loadChildren: () => import('../detail/details.module').then((m) => m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
