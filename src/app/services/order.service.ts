import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { HelpersApiMethods } from './helpers-method';


@Injectable()
export class OrderService {

   constructor(private _http: HttpClient , private _helpers: HelpersApiMethods) {}

  // ORDERS
  getOrders(): Observable<any> {
    return this._http.get(`${this._helpers.apiUrl}/orders`, this._helpers.httpOptions).pipe(
      map(this._helpers.extractData),
      catchError(this._helpers.handleError)
    );
  }

  getOrderById(orderId): Observable<any> {
    return this._http.get(`${this._helpers.apiUrl}/order/${orderId}`, this._helpers.httpOptions).pipe(
      map(this._helpers.extractData),
      catchError(this._helpers.handleError)
    );
  }

  saveOrder(orderData): Observable<any> {
    return this._http
      .post(`${this._helpers.apiUrl}/orders`, orderData, this._helpers.httpOptions)
      .pipe(catchError(this._helpers.handleError));
  }

  updateOrder(orderData): Observable<any> {
    return this._http
      .put(`${this._helpers.apiUrl}/order`, orderData, this._helpers.httpOptions)
      .pipe(catchError(this._helpers.handleError));
  }

  deleteOrder(orderId): Observable<any> {
    return this._http.delete(`${this._helpers.apiUrl}/order/${orderId}`, this._helpers.httpOptions).pipe(
      map(this._helpers.extractData),
      catchError(this._helpers.handleError)
    );
  }

}
