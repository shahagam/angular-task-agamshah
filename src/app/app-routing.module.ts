import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { SearchproductComponent } from './home/product/searchproduct/searchproduct.component';
import { ProductdetailsComponent } from './home/product/productdetails/productdetails.component';
import { GetprobatchComponent } from './home/product/getprobatch/getprobatch.component';
import { PlaceorderComponent } from './home/order/placeorder/placeorder.component';
import { OrderlistComponent } from './home/order/orderlist/orderlist.component';
import { OrderdetailsComponent } from './home/order/orderdetails/orderdetails.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },


        { path: 'searchproduct', component:SearchproductComponent} ,
        { path: 'productdetails', component: ProductdetailsComponent },
        { path: 'getprobatch', component: GetprobatchComponent },
        { path: 'placeorder', component: PlaceorderComponent },
        { path: 'orderlist', component: OrderlistComponent },
        { path: 'orderdetails', component: OrderdetailsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }