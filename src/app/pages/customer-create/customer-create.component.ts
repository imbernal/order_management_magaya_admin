import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  name: String = '';
  phone: String = '';
  email: String = '';
  street: String = '';
  city: String = '';
  state: String = '';
  country: String = '';
  zip: String = '';

  constructor(
    private _router: Router,
    private _customerService: CustomerService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.customerForm = this._formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      street: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      zip: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this._customerService.saveCustomer(form).subscribe(
      res => {

        this._router.navigate(['/customer-details', res._id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
