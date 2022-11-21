import { BusinessService } from 'src/app/services/business.service';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  displayedColumns: string[] = [
    'brand',
    'name',
    'price',
    'quantity',
    'status',
    'category',
    'actions'
  ];

  dataSource = new MatTableDataSource<Product>();

  products!:Product[];
  actualBusinessName!: string;

  constructor(
    private productService:ProductService,
    private businessService:BusinessService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductsByShop(this.businessService.getActualBusiness().name).subscribe((data:Product[])=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
  
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Product) => {
        return e.id !== id ? e : false;
      });
    });
  }

}
