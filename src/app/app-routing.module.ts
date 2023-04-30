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
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { OrderComponent } from './components/order/order.component';
import { AddressComponent } from './components/address/address.component';
import { AddressUpdateComponent } from './components/address-update/address-update.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-detail/:id', component: ProductComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'my-cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountInfoComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'address', component: AddressComponent, canActivate: [AuthGuard] },
  { path: 'shipping', component: ShippingComponent, canActivate: [AuthGuard] },
  { path: 'address-update', component: AddressUpdateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
