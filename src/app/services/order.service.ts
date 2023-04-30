import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillReq } from '../commons/response/order';
import { BaseResponse } from '../commons/response/response';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private baseURL = "http://localhost:8081/api/sales/order";
    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    createBill(billReq: BillReq): Observable<BaseResponse> {
        return this.httpClient.post<BaseResponse>(`${this.baseURL}`, billReq, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
        });
    }

}
