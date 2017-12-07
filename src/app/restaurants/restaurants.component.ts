import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Array<Restaurant>;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService
      .restaurants()
      .subscribe(restaurants => this.restaurants);
  }
}
