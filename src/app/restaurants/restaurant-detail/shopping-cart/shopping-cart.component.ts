import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'app/restaurants/restaurant-detail/menu/menu-item/menu-item.model';

import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnInit() {}

  items(): Array<CartItem> {
    return this.shoppingCart.items;
  }

  total(): number {
    return this.shoppingCart.total();
  }

  clear() {
    this.shoppingCart.clear();
  }

  removeItem(item: CartItem) {
    this.shoppingCart.removeItem(item);
  }

  addItem(item: MenuItem) {
    this.shoppingCart.addItem(item);
  }
}
