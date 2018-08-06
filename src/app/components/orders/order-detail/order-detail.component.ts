import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api-services.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: any;

  constructor(private _route: ActivatedRoute , private _apiService: ApiService ) { }

  ngOnInit() {
    this.getOrderDetails(this._route.snapshot.params['id']);
  }

  getOrderDetails(orderID) {
    this._apiService.getOrderById(orderID).subscribe(
      data => this.order = data,
      error => console.log(error)
    );
  }

}
