import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { SearchproductComponent } from '@app/home/product/searchproduct/searchproduct.component';
import { ProductdetailsComponent } from '@app/home/product/productdetails/productdetails.component';
import { GetprobatchComponent } from '@app/home/product/getprobatch/getprobatch.component';
import { PlaceorderComponent } from '@app/home/order/placeorder/placeorder.component';
import { OrderlistComponent } from '@app/home/order/orderlist/orderlist.component';
import { OrderdetailsComponent } from '@app/home/order/orderdetails/orderdetails.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: AddEditComponent },
            { path: 'edit/:id', component: AddEditComponent },
            { path: 'searchproduct', component: SearchproductComponent },
            { path: 'productdetails', component: ProductdetailsComponent },
            { path: 'getprobatch', component: GetprobatchComponent },
            { path: 'placeorder', component: PlaceorderComponent },
            { path: 'orderlist', component: OrderlistComponent },
            { path: 'orderdetails', component: OrderdetailsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }