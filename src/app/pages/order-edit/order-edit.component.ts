import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  orderForm: FormGroup;
  id: String = '';
  payment_type: String[] = ['Cash', 'Credit Card', 'Check', 'Other'];
  customer: any = [];
  products: any;

  constructor(
    private _router: Router,
    private _orderService: OrderService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getOrder(this._route.snapshot.params['id']);
    this.orderForm = this._formBuilder.group({
      payment_type: [null, Validators.required],
      customer: [null, Validators.required],
      products: [null, Validators.required]
    });
  }

  getOrder(id) {
    this._orderService.getOrderById(id).subscribe(data => {
      this.id = data._id;
      this.orderForm.setValue({
        payment_type: data.payment_type,
        customer: data.customer,
        products: data.products
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this._orderService.updateOrder(form)
      .subscribe(res => {
          const id = res['_id'];
          this._router.navigate(['/order-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  orderDetails() {
    this._router.navigate(['/order-details', this.id]);
  }

}
