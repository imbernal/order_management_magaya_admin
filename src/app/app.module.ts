import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';


import { routingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';

// Pages

import {
  OrderComponent,
  OrderDetailComponent,
  OrderCreateComponent,
  OrderEditComponent,
  CustomerComponent,
  CustomerCreateComponent,
  CustomerDetailComponent,
  CustomerEditComponent,
  DashboardComponent,
  ProductCreateComponent,
  ProductDetailComponent,
  ProductEditComponent,
  ProductComponent
} from './pages';

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
  MatTooltipModule,
  MatBadgeModule,
  MatAutocompleteModule, MatToolbarModule, MatSidenavModule, MatListModule
} from '@angular/material';

// Services
import {CustomerService} from './services/customer.service';
import {OrderService} from './services/order.service';
import {ProductService} from './services/product.service';
import {HelperService} from './services/helper.service';




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
    CustomerEditComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductComponent,
    AdminNavComponent,
    DashboardComponent,
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
    MatAutocompleteModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  providers: [
      CustomerService,
      OrderService,
      ProductService,
      HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
