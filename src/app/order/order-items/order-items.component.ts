import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {
  @Input() items: Array<CartItem>;

  @Output() increaseQuantity = new EventEmitter<CartItem>();
  @Output() decreaseQuantity = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit() {}

  increaseQuantityEvent(item: CartItem) {
    this.increaseQuantity.emit(item);
  }

  decreaseQuantityEvent(item: CartItem) {
    this.decreaseQuantity.emit(item);
  }

  removeEvent(item: CartItem) {
    this.remove.emit(item);
  }
}
