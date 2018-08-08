import { Injectable } from '@angular/core';
import { Observable, of, throwError , forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { HelpersApiMethods } from './helpers-method';

@Injectable()
export class OrderService {
  private _helpers: HelpersApiMethods;

  constructor(private _http: HttpClient) {
    this._helpers = new HelpersApiMethods();
  }

  // ORDERS
  getOrders(): Observable<any> {
    return this._http
      .get(`${this._helpers.apiUrl}/orders`, this._helpers.httpOptions)
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }

  getOrderById(orderId): Observable<any> {
    return forkJoin([
      this._http.get(`${this._helpers.apiUrl}/order/${orderId}` , this._helpers.httpOptions ).pipe(map(this._helpers.extractData)),
      this._http.get(`${this._helpers.apiUrl}/products-order/${orderId}` , this._helpers.httpOptions ).pipe(map(this._helpers.extractData)),
      this._http.get(`${this._helpers.apiUrl}/customer-order/${orderId}` , this._helpers.httpOptions ).pipe(map(this._helpers.extractData))
    ]).pipe(
      map((data: any[]) => {
        const order: any = data[0];
        const products: any[] = data[1];
        const customer: any = data[2];
        order.products = products;
        order.customer = customer;

        return order;
    }));
  }

  saveOrder(orderData): Observable<any> {
    return this._http
      .post(
        `${this._helpers.apiUrl}/orders`,
        orderData,
        this._helpers.httpOptions
      )
      .pipe(catchError(this._helpers.handleError));
  }

  updateOrder(orderData): Observable<any> {
    return this._http
      .put(
        `${this._helpers.apiUrl}/order`,
        orderData,
        this._helpers.httpOptions
      )
      .pipe(catchError(this._helpers.handleError));
  }

  deleteOrder(orderId): Observable<any> {
    return this._http
      .delete(
        `${this._helpers.apiUrl}/order/${orderId}`,
        this._helpers.httpOptions
      )
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }
}
