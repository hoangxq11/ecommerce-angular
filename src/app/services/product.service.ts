import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryListRes } from '../commons/response/category';
import { ListProductDetailRes, ProductRes } from '../commons/response/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8081/api/products";
  constructor(private httpClient: HttpClient) { }

  getDataProductSpec(): Observable<ProductRes> {
    return this.httpClient.get<ProductRes>(`${this.baseURL}/special-products`);
  }

  getDataProductDetailByProductId(productId:number): Observable<ListProductDetailRes> {
    return this.httpClient.get<ListProductDetailRes>(`${this.baseURL}/${productId}`);
  }

  getProductsOfCategory(categoryId:number): Observable<ProductRes> {
    return this.httpClient.get<ProductRes>(`${this.baseURL}/category/${categoryId}`);
  }
  
}
