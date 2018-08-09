import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { HelperService } from './helper.service';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient , private _helper: HelperService) { }

  // Products
  getProducts(): Observable<any> {
    return this._http
      .get(`${this._helper.apiUrl}/products`, this._helper.httpOptions)
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
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
        `${this._helper.apiUrl}/products/${routeIds}`,
        this._helper.httpOptions
      )
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  getProductById(productId): Observable<any> {
    return this._http
      .get(
        `${this._helper.apiUrl}/product/${productId}`,
        this._helper.httpOptions
      )
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  saveProduct(productData): Observable<any> {
    return this._http
      .post(
        `${this._helper.apiUrl}/products`,
        productData,
        this._helper.httpOptions
      )
      .pipe(catchError(this._helper.handleError));
  }

  updateProduct(productData , productId): Observable<any> {
    return this._http
      .put(
        `${this._helper.apiUrl}/product/${productId}`,
        productData,
        this._helper.httpOptions
      )
      .pipe(catchError(this._helper.handleError));
  }

  deleteProduct(productId): Observable<any> {
    return this._http
      .delete(
        `${this._helper.apiUrl}/product/${productId}`,
        this._helper.httpOptions
      )
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }
}
