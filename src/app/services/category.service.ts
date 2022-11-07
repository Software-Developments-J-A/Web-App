import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  basePath:string= environment.basePath;

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>(this.basePath);
   }
   getCategoryId(id: any) {
    return this.http.get<Category>(`${this.basePath}/${id}`);
  }

  addCategories(product: Category) {
    return this.http.post<Category>(this.basePath, product);
  }

  updateCategory(id: any, category: Category) {
    return this.http.put<Category>(`${this.basePath}/${id}`, category);
  }

  deleteCategory(id: any) {
    return this.http.delete<Category>(`${this.basePath}/${id}`);
  }

}
