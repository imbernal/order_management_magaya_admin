import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../api-services.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  orderForm: FormGroup;
  payment_type: String[] = ['Cash', 'Credit Card', 'Check', 'Other'];
  customer: any = [];
  products: any = [];

  constructor(
    private _router: Router,
    private _apiService: ApiService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.orderForm = this._formBuilder.group({
      payment_type: [null, Validators.required],
      customer: [null, Validators.required],
      products: [null, Validators.required]
    });
    // Getting Product List to fill in select option
    this._apiService
      .getProducts()
      .subscribe(res => (this.products = res), error => console.log(error));

    // Getting Customer List to fill in autocomplete
    this._apiService
      .getCustomers()
      .subscribe(res => (this.customer = res), error => console.log(error));
  }

  onFormSubmit(form: NgForm) {
    this._apiService.saveOrder(form).subscribe(
      res => {
        const id = res.order._id;
        this._router.navigate(['/order-details', id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
