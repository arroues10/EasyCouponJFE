import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Coupon } from '../models/coupon';


@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private httpClient: HttpClient) { }



    public getCustomer(): Observable<Customer> {
        return this.httpClient.get<Customer>("http://localhost:8080/couponsystemSolal/webapi/customer/getCustomer", { withCredentials: true });
    }

    public updateCustomer(newCustomer: Customer): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/customer/updateCustomer", newCustomer, { withCredentials: true, responseType: 'text' });
    }

    public getAllCustomerCoupons(): Observable<Coupon[]> {
        return this.httpClient.get<Coupon[]>("http://localhost:8080/couponsystemSolal/webapi/customer/getAllCustomerCoupons", { withCredentials: true });
    }

    public purchaseCoupon(couponId: number): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/customer/purchaseCoupon?couponId=" + couponId, null, { withCredentials: true, responseType: 'text' });
    }


}
