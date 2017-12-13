import { environment } from '../environments/environment';

export const api = {
  restaurants: `${environment.api}/restaurants`,
  menu: `${environment.api}/menu`,
  reviews: `${environment.api}/reviews`,
  orders: `${environment.api}/orders`
};
