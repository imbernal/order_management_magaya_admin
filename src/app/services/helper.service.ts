import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() {}

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public apiUrl = 'http://localhost:3000';

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened!!!');
  }

  extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
