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

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
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

}
