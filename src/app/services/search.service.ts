import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryListRes } from '../commons/response/category';
import { SearchSpecRes } from '../commons/response/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseURL = "http://localhost:8081/api/search";
  constructor(private httpClient: HttpClient) { }

  getSearchSpecial(): Observable<SearchSpecRes> {
    return this.httpClient.get<SearchSpecRes>(`${this.baseURL}`);
  }
  
}
