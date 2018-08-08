import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {
  DashboardComponent,
  OrderComponent,
  OrderDetailComponent,
  OrderCreateComponent,
  OrderEditComponent,
  CustomerComponent,
  CustomerDetailComponent,
  CustomerCreateComponent,
  CustomerEditComponent,
  ProductComponent
} from './pages';


const routes: Routes  = [
  {
    path: '' , component: DashboardComponent,
  },
  // Order Routes
  {
    path: 'orders',
    component: OrderComponent,
    data: { title: 'Order List' }
  },
  {
    path: 'order-details/:id',
    component: OrderDetailComponent,
    data: { title: 'Order Details' }
  },
  {
    path: 'order-create',
    component: OrderCreateComponent,
    data: { title: 'Create Order' }
  },
  {
    path: 'order-edit/:id',
    component: OrderEditComponent,
    data: { title: 'Edit Order' }
  },
  // Customer Routes
  {
    path: 'customers',
    component: CustomerComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent,
    data: { title: 'Create Customer' }
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent,
    data: { title: 'Edit Customer' }
  },
  // Product Routes
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent,
    data: { title: 'Create Customer' }
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent,
    data: { title: 'Edit Customer' }
  },
  {
    path: '**',
    redirectTo: '',
  }
];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
