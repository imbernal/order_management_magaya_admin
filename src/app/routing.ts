import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Orders
import { OrderEditComponent } from './components/orders/order-edit/order-edit.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';
import { OrderComponent } from './components/orders/order/order.component';

// Customers

import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerCreateComponent } from './components/customers/customer-create/customer-create.component';
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customers/customer-edit/customer-edit.component';


const routes: Routes  = [
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
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
