import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { HelpersApiMethods } from './helpers-method';


@Injectable()
export class ProductService {

   constructor(private _http: HttpClient , private _helpers: HelpersApiMethods) {}

   // Products
  getProducts(): Observable<any> {
    return this._http.get(`${this._helpers.apiUrl}/products`, this._helpers.httpOptions).pipe(
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

    return this._http.get(`${this._helpers.apiUrl}/products/${routeIds}`, this._helpers.httpOptions).pipe(
      map(this._helpers.extractData),
      catchError(this._helpers.handleError)
    );
  }

}
