import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "http://localhost:3000";

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened!!!");
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

  // Products
  getProducts(): Observable<any> {
    return this._http.get(`${apiUrl}/products`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  // Method to get products from list of products' ids
  getProductsByIds(produIds) {
    let routeIds: String = '';

    for (const id of produIds) {
      routeIds += `${id},`;
    }

    // Removing last ','
    routeIds = routeIds.slice(0, -1);

    return this._http.get(`${apiUrl}/products/${routeIds}`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  // Customers
  getCustomers(): Observable<any> {
    return this._http.get(`${apiUrl}/customers`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCustomerById(customerId): Observable<any> {
    return this._http.get(`${apiUrl}/customer/${customerId}`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
