import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: `products/:productId`,
    loadChildren: () =>
      import('./pages/detail/details.module').then((m) => m.DetailsModule),
  },
  {
    path: `products`,
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  { path: '', redirectTo: `home`, pathMatch: `full` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
