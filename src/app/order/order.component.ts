import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';

import { OrderItem } from './order-item.model';
import { Order } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  paymentOptions: Array<RadioOption> = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Referição', value: 'REF' }
  ];

  delivery = 8;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() { }

  cartItems(): Array<CartItem> {
    return this.orderService.cartItems();
  }

  increaseQuantity(item: CartItem) {
    this.orderService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.orderService.decreaseQuantity(item);
  }

  remove(item: CartItem) {
    this.orderService.removeItem(item);
  }

  totalItems() {
    return this.orderService.totalItems();
  }

  checkout(order: Order) {
    order.items = this.cartItems().map(
      (item: CartItem) =>
        <OrderItem>{
          menuItemId: item.menuItem.id,
          quantity: item.quantity
        }
    );

    this.orderService.checkout(order).subscribe((orderId: number) => {
      this.router.navigateByUrl('/order-summary');
      this.orderService.clear();
    });
  }
}
