import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage,
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
export class CartPageRoutingModule {}
