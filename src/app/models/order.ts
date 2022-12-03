import { Business } from 'src/app/models/business';
import { OrderDetail } from './orderDetail';
export class Order {
    id: number;
    amount: number;
    details: OrderDetail[];
}
  