import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { HelpersApiMethods } from './helpers-method';

@Injectable()
export class CustomerService {
  private _helpers: HelpersApiMethods;

  constructor(private _http: HttpClient) {
    this._helpers = new HelpersApiMethods();
  }

  // Customers
  getCustomers(): Observable<any> {
    return this._http
      .get(`${this._helpers.apiUrl}/customers`, this._helpers.httpOptions)
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }

  getCustomerById(customerId): Observable<any> {
    return this._http
      .get(
        `${this._helpers.apiUrl}/customer/${customerId}`,
        this._helpers.httpOptions
      )
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }

  saveCustomer(customerData): Observable<any> {
    return this._http
      .post(
        `${this._helpers.apiUrl}/customers`,
        customerData,
        this._helpers.httpOptions
      )
      .pipe(catchError(this._helpers.handleError));
  }

  deleteCustomer(customerId): Observable<any> {
    return this._http
      .delete(
        `${this._helpers.apiUrl}/customer/${customerId}`,
        this._helpers.httpOptions
      )
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }

  updateCustomer(customerData): Observable<any> {
    return this._http
      .put(
        `${this._helpers.apiUrl}/customers`,
        customerData,
        this._helpers.httpOptions
      )
      .pipe(catchError(this._helpers.handleError));
  }
}
