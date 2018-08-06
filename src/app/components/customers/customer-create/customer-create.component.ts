import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../api-services.service';

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
    private _apiService: ApiService,
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
    this._apiService.saveCustomer(form).subscribe(
      res => {
        const id = res.customer._id;
        this._router.navigate(['/customer-details', id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
