import { CategoryService } from './../../../services/category.service';
import { BusinessService } from 'src/app/services/business.service';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar,MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

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

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  products!:Product[];
  actualBusinessName!: string;

  constructor(
    private productService:ProductService,
    private categoryService: CategoryService,
    private businessService:BusinessService,
    private snackBar: MatSnackBar

    ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('respuesta de productos: ', data);
        this.processProductResponse(data);
      },
      (error: any) => {
        console.log('error en productos: ', error);
      }
    );
  }

  processProductResponse(resp: any) {
    const dateProduct: Product[] = [];

    let listCProduct = resp;

    listCProduct.forEach((element: Product) => {
      //element.category = element.category.name;
      element.brand = 'data:image/jpeg;base64,' + element.brand;
      dateProduct.push(element);
    });

    //set the datasource
    this.dataSource = new MatTableDataSource<Product>(dateProduct);
    this.dataSource.paginator = this.paginator;
  }

  
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Product) => {
        return e.id !== id ? e : false;
      });
    });
  }

  exportExcel(){
    this.categoryService.exportCategory().subscribe(
      (data: any) => {
        let file = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        let fileUrl = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download = 'Categories.xlsx';
        anchor.href = fileUrl;
        anchor.click();

        this.openSnackBar('Archivo exportado correctamente', 'Exitosa');
      },
      (error: any) => {
        this.openSnackBar('No se pudo exportar el archivo', 'Error');
      }
    );
  }
}
