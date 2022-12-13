import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: `category/:categoryId`,
    loadChildren: () =>
      import('./pages/categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: `category/:categoryId/product/:productId`, loadChildren: () => import('./pages/detail/details.module').then((m) => m.DetailsModule)
  },
  { path: '', redirectTo: `home`, pathMatch: `full` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
