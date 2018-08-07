import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: any;

  constructor(private _route: ActivatedRoute , private _customerService: CustomerService, private _router: Router ) { }

  ngOnInit() {
    this.getCustomerDetails(this._route.snapshot.params['id']);
  }

  getCustomerDetails(customerId) {
    this._customerService.getCustomerById(customerId).subscribe(
      data => this.customer = data,
      error => console.log(error)
    );
  }

  deleteCustomer(customerId) {
    this._customerService.deleteCustomer(customerId).subscribe(
      res => this._router.navigate(['/customers'])
    );
  }

}
