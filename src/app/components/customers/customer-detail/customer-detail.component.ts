import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ApiService } from '../../../api-services.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: any;

  constructor(private _route: ActivatedRoute , private _apiService: ApiService, private _router: Router ) { }

  ngOnInit() {
    this.getCustomerDetails(this._route.snapshot.params['id']);
  }

  getCustomerDetails(customerId) {
    this._apiService.getCustomerById(customerId).subscribe(
      data => this.customer = data,
      error => console.log(error)
    );
  }

  deleteCustomer(customerId) {
    this._apiService.deleteCustomer(customerId).subscribe(
      res => this._router.navigate(['/customers'])
    );
  }

}
