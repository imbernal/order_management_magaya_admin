import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import {OrderService} from '../../services/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  oders: any;
  displayedColumns = ['number', 'total', 'payment_type' , 'date'];
  dataSource = new OrderDataSource(this._orderService);

  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this._orderService.getOrders().subscribe(
      data => this.oders = data,
      error => console.log(error)
    );
  }

}

export class OrderDataSource extends DataSource<any> {

  constructor(private _orderService) {
    super();
  }

  connect() {
    return this._orderService.getOrders();
  }

  disconnect() {}

}
