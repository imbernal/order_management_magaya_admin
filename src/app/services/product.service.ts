import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { HelpersApiMethods } from './helpers-method';

@Injectable()
export class ProductService {

  private _helpers: HelpersApiMethods;

  constructor(private _http: HttpClient) {
    this._helpers = new HelpersApiMethods();
  }

  // Products
  getProducts(): Observable<any> {
    return this._http
      .get(`${this._helpers.apiUrl}/products`, this._helpers.httpOptions)
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
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

    return this._http
      .get(
        `${this._helpers.apiUrl}/products/${routeIds}`,
        this._helpers.httpOptions
      )
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }

  getProductById(productId): Observable<any> {
    return this._http
      .get(
        `${this._helpers.apiUrl}/product/${productId}`,
        this._helpers.httpOptions
      )
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }

  saveProduct(productData): Observable<any> {
    return this._http
      .post(
        `${this._helpers.apiUrl}/products`,
        productData,
        this._helpers.httpOptions
      )
      .pipe(catchError(this._helpers.handleError));
  }

  updateProduct(productData): Observable<any> {
    return this._http
      .put(
        `${this._helpers.apiUrl}/product`,
        productData,
        this._helpers.httpOptions
      )
      .pipe(catchError(this._helpers.handleError));
  }

  deleteProduct(productId): Observable<any> {
    return this._http
      .delete(
        `${this._helpers.apiUrl}/product/${productId}`,
        this._helpers.httpOptions
      )
      .pipe(
        map(this._helpers.extractData),
        catchError(this._helpers.handleError)
      );
  }
}
