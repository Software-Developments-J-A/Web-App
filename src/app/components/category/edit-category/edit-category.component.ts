import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  myForm!: FormGroup;
  category!: Category;
  idCategory: any;

  constructor(private fb: FormBuilder,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.idCategory = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoryId(this.idCategory).subscribe((data) => {
      this.category = data;
      this.myForm = this.fb.group({
        name: [this.category.name,[Validators.required]],
      });
    });

  }

  updateCategory() {
    const category: Category = {
      id: this.idCategory,
      name: this.myForm.get('name')!.value,
    };
    this.categoryService.updateCategory(this.idCategory, category).subscribe({
      next: (data) => {
        this.snackBar.open('Categoria actualizada con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/categories']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
