import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { ErrorService } from 'app/error.service';
import { environment } from 'environments/environment';

import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {
  private api: string;

  private catchHttpErrors = () => (source$: Observable<any>) =>
    source$.pipe(catchError(this.error.handler));

  constructor(private http: HttpClient, private error: ErrorService) {
    this.api = `${environment.api}/restaurants`;
  }

  restaurants(): Observable<Array<Restaurant>> {
    return this.http
      .get<Array<Restaurant>>(this.api)
      .pipe(this.catchHttpErrors());
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`${this.api}/${id}`)
      .pipe(this.catchHttpErrors());
  }
}
