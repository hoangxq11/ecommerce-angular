import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryRes } from '../commons/response/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = "http://localhost:8081/api/categories";
  constructor(private httpClient: HttpClient) { }

  getDataCategorySpe(): Observable<CategoryRes> {
    return this.httpClient.get<CategoryRes>(`${this.baseURL}`);
  }

  getDataCategory(): Observable<CategoryRes> {
    return this.httpClient.get<CategoryRes>(`${this.baseURL}`);
  }
  
}
