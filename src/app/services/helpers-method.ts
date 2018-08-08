import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

interface IHelpersMethods {
    handleError(error: HttpErrorResponse): any;
    extractData(res: Response): any;
}

export class HelpersApiMethods implements IHelpersMethods {

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
