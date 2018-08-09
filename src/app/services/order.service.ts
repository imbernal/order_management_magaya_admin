import { Injectable } from '@angular/core';
import { Observable, of, throwError , forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { HelperService } from './helper.service';

@Injectable()
export class OrderService {

  constructor(private _http: HttpClient , private _helpers: HelperService) { }

  // ORDERS
  getOrders(): Observable<any> {
    return this._http
      .get(`${this._helper.apiUrl}/orders`, this._helper.httpOptions)
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  getOrderById(orderId): Observable<any> {
    return forkJoin([
      this._http.get(`${this._helper.apiUrl}/order/${orderId}` , this._helper.httpOptions ).pipe(map(this._helper.extractData)),
      this._http.get(`${this._helper.apiUrl}/products/` , this._helper.httpOptions ).pipe(map(this._helper.extractData)),
      this._http.get(`${this._helper.apiUrl}/customer-order/${orderId}` , this._helper.httpOptions ).pipe(map(this._helper.extractData))
    ]).pipe(
      map((data: any[]) => {
        const order: any = data[0];
        const products: any[] = data[1];
        const customer: any = data[2];
        order.allProducts = products;
        order.customer = customer;

        return order;
    }));
  }

  saveOrder(orderData): Observable<any> {
    return this._http
      .post(
        `${this._helper.apiUrl}/orders`,
        orderData,
        this._helper.httpOptions
      )
      .pipe(catchError(this._helper.handleError));
  }

  updateOrder(orderData, orderId): Observable<any> {
    return this._http
      .put(
        `${this._helper.apiUrl}/order/${orderId}`,
        orderData,
        this._helper.httpOptions
      )
      .pipe(catchError(this._helper.handleError));
  }

  deleteOrder(orderId): Observable<any> {
    return this._http
      .delete(
        `${this._helper.apiUrl}/order/${orderId}`,
        this._helper.httpOptions
      )
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }
}
