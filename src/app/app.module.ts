import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { HeaderComponent } from './home/header/header.component';
import { SearchproductComponent } from './home/product/searchproduct/searchproduct.component';
import { ProductdetailsComponent } from './home/product/productdetails/productdetails.component';
import { GetprobatchComponent } from './home/product/getprobatch/getprobatch.component';
import { PlaceorderComponent } from './home/order/placeorder/placeorder.component';
import { OrderdetailsComponent } from './home/order/orderdetails/orderdetails.component';
import { OrderlistComponent } from './home/order/orderlist/orderlist.component';
import { ProductComponent } from './home/product/product.component';
import { PatientComponent } from './home/patient/patient.component';
import { OrderComponent } from './home/order/order.component';
import { FooterComponent } from './home/footer/footer.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        HeaderComponent,
        SearchproductComponent,
        ProductdetailsComponent,
        GetprobatchComponent,
        PlaceorderComponent,
        OrderdetailsComponent,
        OrderlistComponent,
        ProductComponent,
        PatientComponent,
        OrderComponent,
        FooterComponent,
     
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };