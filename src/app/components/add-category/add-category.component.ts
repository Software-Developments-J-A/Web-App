import { Category } from './../../models/category';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  myForm!: FormGroup;

  constructor( private fb: FormBuilder,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private router: Router) {this.reactiveForm(); }

  ngOnInit(): void { }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
    });
  }

  saveCategory(): void {
    const category: Category = {
      id: 0,
      name: this.myForm.get('name')!.value,
    };
    this.categoryService.addCategories(category).subscribe({
      next: (data) => {
        this.snackBar.open('Categoria registrada con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['categories']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
