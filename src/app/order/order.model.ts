import { OrderItem } from './order-item.model';

export interface Order {
  id: number;
  address: string;
  number: number;
  optionalAddress: string;
  paymentOption: string;
  items?: Array<OrderItem>;
}
