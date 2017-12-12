import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ErrorService {
  constructor() {}

  handler: (err: HttpErrorResponse | any) => Observable<any> = (
    err: HttpErrorResponse | any
  ) => {
    let errorMessage: string;

    if (err.error instanceof HttpErrorResponse) {
      errorMessage = `Backend ${err.url} returned code ${
        err.status
      }, body was: ${err.statusText}`;
    } else {
      errorMessage = err.toString();
    }

    console.log(errorMessage);

    return of(false);
  }
}
