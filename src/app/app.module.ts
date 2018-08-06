import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Orders
import { OrderComponent } from './components/orders/order/order.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';
import { OrderEditComponent } from './components/orders/order-edit/order-edit.component';

// Customers
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerCreateComponent } from './components/customers/customer-create/customer-create.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';


import { routingModule } from './routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatAutocompleteModule
} from '@angular/material';
import { ApiService } from './api-services.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderDetailComponent,
    OrderCreateComponent,
    OrderEditComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
