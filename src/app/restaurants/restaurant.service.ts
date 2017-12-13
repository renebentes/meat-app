import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { api } from 'app/app.api';
import { ErrorService } from 'app/error.service';

import { MenuItem } from './restaurant-detail/menu/menu-item/menu-item.model';
import { Review } from './restaurant-detail/reviews/review.model';
import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {
  private catchHttpErrors = () => (source$: Observable<any>) =>
    source$.pipe(catchError(this.error.handler));

  constructor(private http: HttpClient, private error: ErrorService) {}

  restaurants(): Observable<Array<Restaurant>> {
    return this.http
      .get<Array<Restaurant>>(api.restaurants)
      .pipe(this.catchHttpErrors());
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`${api.restaurants}/${id}`)
      .pipe(this.catchHttpErrors());
  }

  reviewsOfRestaurant(id: string): Observable<Array<Review>> {
    return this.http
      .get<Array<Review>>(`${api.restaurants}/${id}/reviews`)
      .pipe(this.catchHttpErrors());
  }

  menuOfRestaurant(id: string): Observable<Array<MenuItem>> {
    return this.http
      .get<Array<MenuItem>>(`${api.restaurants}/${id}/menu`)
      .pipe(this.catchHttpErrors());
  }
}
