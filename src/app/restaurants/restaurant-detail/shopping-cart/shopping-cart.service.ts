import { Injectable } from '@angular/core';

import { MenuItem } from 'app/restaurants/restaurant-detail/menu/menu-item/menu-item.model';

import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {
  private _items: Array<CartItem>;

  get items() {
    return this._items;
  }

  constructor() {
    this._items = new Array<CartItem>();
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
      foundItem.quantity++;
    } else {
      this._items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this._items.splice(this._items.indexOf(item), 1);
  }
}
