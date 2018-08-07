import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:3000';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened!!!');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  // API CRUD METHODS

  // ORDERS
  getOrders(): Observable<any> {
    return this._http.get(`${apiUrl}/orders`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getOrderById(orderId): Observable<any> {
    return this._http.get(`${apiUrl}/order/${orderId}`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  saveOrder(orderData): Observable<any> {
    return this._http
      .post(`${apiUrl}/orders`, orderData, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateOrder(orderData): Observable<any> {
    return this._http
      .put(`${apiUrl}/order`, orderData, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteOrder(orderId): Observable<any> {
    return this._http.delete(`${apiUrl}/order/${orderId}`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
