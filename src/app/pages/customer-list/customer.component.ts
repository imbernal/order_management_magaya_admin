import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { CustomerService } from '../../services/customer.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;
  displayedColumns = ['name', 'phone', 'email' , 'shipping_address'];
  dataSource = new OrderDataSource(this._customerService);

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomers().subscribe(
      data => this.customers = data,
      error => console.log(error)
    );
  }

}

export class OrderDataSource extends DataSource<any> {

  constructor(private _customerService) {
    super();
  }

  connect() {
    return this._customerService.getCustomers();
  }

  disconnect() {}

}
