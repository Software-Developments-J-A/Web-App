import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
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

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.reactiveForm();
  }

  ngOnInit(): void { }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  saveProduct(): void {
    const product: Product = {
      id: 0,
      title: this.myForm.get('title')!.value,
      sku: this.myForm.get('brand')!.value,
      brand: this.myForm.get('brand')!.value,
      summary: this.myForm.get('summary')!.value,
      price: this.myForm.get('price')!.value,
      quantity: this.myForm.get('price')!.value,
      status: this.myForm.get('price')!.value,

    };
    this.productService.addProducts(product).subscribe({
      next: (data) => {
        this.snackBar.open('Producto registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
