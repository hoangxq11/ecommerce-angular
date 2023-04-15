import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'product-detail/:id', component: ProductComponent, canActivate:[AuthGuard]},
  {path: 'category/:id', component: CategoryComponent, canActivate:[AuthGuard]},
  {path: 'my-cart', component: CartComponent, canActivate:[AuthGuard]},
  {path: 'payment', component: PaymentComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
