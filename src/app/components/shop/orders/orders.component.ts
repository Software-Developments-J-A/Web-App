import { Business } from 'src/app/models/business';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusinessService } from 'src/app/services/business.service';
import { OrderDetail } from './../../../models/orderDetail';
import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Product[];
  Business: Business[];


  details: OrderDetail[] = [];
  idBusinessSelected: number;
  price: number;
  quantity: number;
  total: number;
  product:Product;
  

  constructor(
    private businessService: BusinessService,
    private productservice: ProductService,

    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getBusiness();
    this.getProducts();
  }
  getBusiness() {
    this.businessService.getBusiness().subscribe(
      (data: any) => {
        this.Business = data;
      },
      (error: any) => {
        console.log('error al consultar pacientes');
      }
    );
  }
  getProducts() {
    this.productservice.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      (error: any) => {
        console.log('error al consultar pacientes');
      }
    );
  }

  addDetail() {
    let det = new OrderDetail();
    det.price = this.price;
    det.quantity = this.quantity;
    det.total =this.price * this.quantity;
    det.product_id=this.product;

    this.details.push(det);
  }

  removeDetail(index: number) {
    this.details.splice(index, 1);
  }

  saveOrder() {
    let business = new Business();
    business.id = this.idBusinessSelected;

    console.log('Negocio:', business.id);

    let order = new Order();
    order.details=this.details;
    order.amount=1000;
    console.log(this.details);

    this.orderService.saveOrder(order).subscribe(() => {
      this.snackBar.open('Registro de consulta OK', 'INFO', { duration: 2000 });
      setTimeout(() => {
      }, 2000);
    });
  }

}
