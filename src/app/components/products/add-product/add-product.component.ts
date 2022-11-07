import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: Category[] = [];
  selectedFile: any;
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService:CategoryService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.reactiveForm();
  }

  ngOnInit(): void {  this.reactiveForm();
    this.getCategories();}

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      category: ['', Validators.required],

    });
  }


  getCategories(){
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error: any) => {
        console.log('error al consultar categorias');
      }
    );
  }
  saveProduct(): void {

    const product: Product = {
      id: 0,
      name: this.myForm.get('name')!.value,
      brand: this.myForm.get('brand')!.value,
      summary: this.myForm.get('summary')!.value,
      price: this.myForm.get('price')!.value,
      quantity: this.myForm.get('quantity')!.value,
      status: true,
      category_id: this.myForm.get('category')?.value,
      business_id: 1,
    };

    const uploadImageData = new FormData();
    uploadImageData.append('brand', product.brand);
    uploadImageData.append('name', product.name);
    uploadImageData.append('summary', product.summary);
    uploadImageData.append('price', product.price.toString());
    uploadImageData.append('quantity', product.quantity.toString());
    uploadImageData.append('status', product.status.toString());
    uploadImageData.append('category_id', product.category_id);
    uploadImageData.append('business_id', product.business_id);


    this.productService.addProducts(uploadImageData).subscribe({
      next: (data) => {
        this.snackBar.open('Producto registrado con exito!', '', {
          duration: 3000,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
