import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'



import{ShopingCartComponent} from '../components/shopping-cart/shoping-cart/shoping-cart.component';

import { WishListComponent } from '../components/shopping-cart/wish-list/wish-list.component'
import { PageNotFoundComponent } from '../components/shared/page-not-found/page-not-found.component'
import { RegisterComponent } from '../components/register/register.component'
import { LoginComponent } from '../components/login/login.component'



const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShopingCartComponent },
  { path: 'wish-list' ,component: WishListComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
