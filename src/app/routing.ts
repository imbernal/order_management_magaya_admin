import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { OrderEditComponent } from './components/orders/order-edit/order-edit.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';
import { OrderComponent } from './components/orders/order/order.component';


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
    component: OrderComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'customer-details/:id',
    component: OrderDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'customer-create',
    component: OrderCreateComponent,
    data: { title: 'Create Customer' }
  },
  {
    path: 'customer-edit/:id',
    component: OrderEditComponent,
    data: { title: 'Edit Customer' }
  },
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
