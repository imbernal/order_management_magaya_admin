import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';


import { routingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
  MatAutocompleteModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

// Services
import {CustomerService} from './services/customer.service';
import {OrderService} from './services/order.service';
import {ProductService} from './services/product.service';
import {HelperService} from './services/helper.service';
import { StatisticService } from './services/statistic.service';


import {
  AdminNavComponent,
  ChartProductComponent,
  ChartCustomerComponent
} from './components';

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
    ChartProductComponent,
    ChartCustomerComponent
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
    MatBadgeModule,
    ChartsModule
  ],
  providers: [
      CustomerService,
      OrderService,
      ProductService,
      HelperService,
      StatisticService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
