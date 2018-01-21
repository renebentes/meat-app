import { Injectable } from '@angular/core';

import { MenuItem } from 'app/restaurants/restaurant-detail/menu/menu-item/menu-item.model';

import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {
  private _items: Array<CartItem>;

  constructor() {
    this._items = new Array<CartItem>();
  }

  items(): Array<CartItem> {
    return this._items;
  }

  clear() {
    this._items = new Array<CartItem>();
  }

  total(): number {
    return this._items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  addItem(item: MenuItem) {
    const foundItem = this._items.find(x => x.menuItem.id === item.id);

    if (foundItem) {
      this.increaseQuantity(foundItem);
    } else {
      this._items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this._items.splice(this._items.indexOf(item), 1);
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    item.quantity--;

    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
}
