import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { Order } from './order.model';
import { api } from 'app/app.api';
import { ErrorService } from 'app/error.service';

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient,
    private error: ErrorService
  ) {}

  cartItems(): Array<CartItem> {
    return this.cartService.items();
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  totalItems(): number {
    return this.cartService.total();
  }

  clear() {
    this.cartService.clear();
  }

  checkout(order: Order): Observable<string> {
    return this.http
      .post<Order>(api.orders, JSON.stringify(order))
      .pipe(this.catchHttpErrors());
  }

  private catchHttpErrors = () => (source$: Observable<any>) =>
    source$.pipe(catchError(this.error.handler));
}
