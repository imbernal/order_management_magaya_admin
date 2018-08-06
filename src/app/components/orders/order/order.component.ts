import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api-services.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  oders: any;
  displayedColumns = ['number', 'total', 'payment_type' , 'date'];
  dataSource = new OrderDataSource(this._apiServices);

  constructor(private _apiServices: ApiService) { }

  ngOnInit() {
    this._apiServices.getOrders().subscribe(
      data => this.oders = data,
      error => console.log(error)
    );
  }

}

export class OrderDataSource extends DataSource<any> {

  constructor(private _apiService) {
    super();
  }

  connect(){
    return this._apiService.getOrders();
  }

  disconnect() {}

}
