import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage,
    children:[
      {
        path: 'cart',
        redirectTo: '/cart'
      },
      {
        path: 'home',
        redirectTo: '/home'
      },
      {
        path: 'categories',
        redirectTo: '/categories'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
