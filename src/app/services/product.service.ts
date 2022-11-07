import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  basePathlist:string= environment.basePathListProducts;
  basePath:string= environment.basePathProducts;


  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.basePathlist);
  }

  getProductId(id: any) {
    return this.http.get<Product>(`${this.basePath}/${id}`);
  }

  addProducts(product: any) {
    return this.http.post<Product>(this.basePath, product);
  }

  updateProduct(id: any, product: Product) {
    return this.http.put<Product>(`${this.basePath}/${id}`, product);
  }

  deleteProduct(id: any) {
    return this.http.delete<Product>(`${this.basePath}/${id}`);
  }
}
