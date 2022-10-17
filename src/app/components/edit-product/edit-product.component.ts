import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myForm!: FormGroup;
  product!: Product;
  idProduct: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.paramMap.get('id');
    this.productService.getProductId(this.idProduct).subscribe((data) => {
      this.product = data;
      this.myForm = this.fb.group({
        title: [this.product.title,[Validators.required]],
        brand: [this.product.brand, [Validators.required]],
        summary: [this.product.summary, [Validators.required]],
        price: [this.product.price, [Validators.required]],
      });
    });
  }

  updateProduct() {
    const product: Product = {
      id: this.idProduct,
      title: this.myForm.get('title')!.value,
      brand: this.myForm.get('brand')!.value,
      summary: this.myForm.get('summary')!.value,
      price: this.myForm.get('price')!.value,
    };
    this.productService.updateProduct(this.idProduct, product).subscribe({
      next: (data) => {
        this.snackBar.open('Producto actualizado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}


