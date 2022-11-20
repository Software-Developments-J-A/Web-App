import { Business } from './../../../models/business';
import { BusinessService } from './../../../services/business.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products!:Product[];
  actualBusinessName:any;
  
  constructor(
    private productService:ProductService,
    private businessService:BusinessService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductsByShop(this.businessService.getActualBusiness().name).subscribe((data:Product[])=>{
      this.products=data;
    });
  }

  addToCart(){

  }
}
