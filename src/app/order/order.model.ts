import { OrderItem } from './order-item.model';

export interface Order {
  address: string;
  number: number;
  optionalAddress: string;
  paymentOption: string;
  items?: Array<OrderItem>;
}
