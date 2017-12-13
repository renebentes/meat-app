import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Review } from './review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<Array<Review>>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(
      this.route.parent.snapshot.params['id']
    );
  }
}
