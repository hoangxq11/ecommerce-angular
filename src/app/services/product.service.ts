import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryRes } from '../commons/response/category';
import { ProductDetailRes, ProductRes } from '../commons/response/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8081/api/products";
  constructor(private httpClient: HttpClient) { }

  getDataProductSpec(): Observable<ProductRes> {
    return this.httpClient.get<ProductRes>(`${this.baseURL}/special-products`);
  }
  
}
