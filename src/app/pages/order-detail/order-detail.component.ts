import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: any;

  constructor(private _route: ActivatedRoute , private _orderService: OrderService, private _router: Router ) { }

  ngOnInit() {
    this.getOrderDetails(this._route.snapshot.params['id']);
  }

  getOrderDetails(orderID) {
    this._orderService.getOrderById(orderID).subscribe(
      data => this.order = data,
      error => console.log(error)
    );
  }

  deleteOrder(orderId) {
    this._orderService.deleteOrder(orderId).subscribe(
      res => this._router.navigate(['/orders'])
    );
  }

}
