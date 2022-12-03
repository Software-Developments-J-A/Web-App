import { SimpleSnackBar, MatSnackBarRef, MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
  ];

  dataSource = new MatTableDataSource<Category>();

  categories!:Category[];

  constructor(private categoryService:CategoryService,private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data:Category[])=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
  
  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Category) => {
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
