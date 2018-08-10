import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { HelperService } from "./helper.service";

@Injectable()
export class StatisticService {
  constructor(private _http: HttpClient, private _helper: HelperService) {}

  getGeneralStatistic(): Observable<any> {
    return this._http
      .get(`${this._helper.apiUrl}/general-statistics`, this._helper.httpOptions)
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  getTopCustomers(): Observable<any> {
    return this._http
      .get(`${this._helper.apiUrl}/top-customers`, this._helper.httpOptions)
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

  getTopProducts(): Observable<any> {
    return this._http
      .get(`${this._helper.apiUrl}/top-products`, this._helper.httpOptions)
      .pipe(
        map(this._helper.extractData),
        catchError(this._helper.handleError)
      );
  }

}
