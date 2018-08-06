import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api-services.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;
  displayedColumns = ['name', 'phone', 'email' , 'shipping_address'];
  dataSource = new OrderDataSource(this._apiServices);

  constructor(private _apiServices: ApiService) { }

  ngOnInit() {
    this._apiServices.getCustomers().subscribe(
      data => this.customers = data,
      error => console.log(error)
    );
  }

}

export class OrderDataSource extends DataSource<any> {

  constructor(private _apiService) {
    super();
  }

  connect() {
    return this._apiService.getCustomers();
  }

  disconnect() {}

}
