import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {
  private api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}/restaurants`;
  }

  restaurants(): Observable<Array<Restaurant>> {
    return this.http.get<Array<Restaurant>>(this.api);
  }
}
