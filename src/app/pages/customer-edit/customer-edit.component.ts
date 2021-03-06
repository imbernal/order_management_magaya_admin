import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {


  customerForm: FormGroup;
  id: String = '';
  name: String = '';
  phone: String = '';
  email: String = '';
  street: String = '';
  city: String = '';
  state: String = '';
  country: String = '';
  zip: String = '';
  error: {} = {
    valid: false,
    msg: ''
  };

  constructor(
    private _router: Router,
    private _customerService: CustomerService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCustomer(this._route.snapshot.params['id']);
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

  getCustomer(id) {
    this._customerService.getCustomerById(id).subscribe(data => {
      this.id = data._id;
      this.customerForm.setValue({
        name: data.name,
        phone: data.phone,
        email: data.email,
        street: data.shipping_address.street,
        city: data.shipping_address.city,
        state: data.shipping_address.state,
        country: data.shipping_address.country,
        zip: data.shipping_address.zip
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this._customerService.updateCustomer(form, this.id)
      .subscribe(res => {
        if (res.msg) {
          this.error = {
            valid: true,
            msg: res.msg
          };
        } else {
          this._router.navigate(['/customer-details', res._id]);
        }

      }, (err) => {
        console.log(err);
      }
      );
  }

  customerDetails() {
    this._router.navigate(['/customer-details', this.id]);
  }

}
