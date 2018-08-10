import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { HelperService } from './helper.service';


@Injectable()
export class CustomerService {

  constructor(private _http: HttpClient , private _helper: HelperService) { }

  // Customers
  getCustomers(): Observable<any> {
    return this._http
      .get(`${this._helper.apiUrl}/customers`, this._helper.httpOptions)
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  getCustomerById(customerId): Observable<any> {
    return this._http
      .get(
        `${this._helper.apiUrl}/customer/${customerId}`,
        this._helper.httpOptions
      )
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  saveCustomer(customerData): Observable<any> {
    return this._http
      .post(
        `${this._helper.apiUrl}/customers`,
        customerData,
        this._helper.httpOptions
      )
      .pipe(
        catchError(this._helper.handleError)
      );
  }

  deleteCustomer(customerId): Observable<any> {
    return this._http
      .delete(
        `${this._helper.apiUrl}/customer/${customerId}`,
        this._helper.httpOptions
      )
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  updateCustomer(customerData , customerId): Observable<any> {
    return this._http
      .put(
        `${this._helper.apiUrl}/customer/${customerId}`,
        customerData,
        this._helper.httpOptions
      )
      .pipe(catchError(this._helper.handleError));
  }
}
