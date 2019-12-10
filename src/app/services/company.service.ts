import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';
import { Company } from '../models/company';



@Injectable({ providedIn: 'root' })

export class CompanyService {

    constructor(private httpClient: HttpClient) { }

    public getAllCouponsCompany(): Observable<Coupon[]> {
        return this.httpClient.get<Coupon[]>("http://localhost:8080/couponsystemSolal/webapi/company/getAllCompanyCoupons", { withCredentials: true });
    }

    public getCompany(): Observable<Company> {
        return this.httpClient.get<Company>("http://localhost:8080/couponsystemSolal/webapi/company/getCompany", { withCredentials: true });
    }

    public getCouponsCompanyById(couponId: number): Observable<Coupon> {
        return this.httpClient.get<Coupon>("http://localhost:8080/couponsystemSolal/webapi/company/getCoupon?id=" + couponId);
    }

    public createCoupon(coupon: Coupon): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/company/createCoupon", coupon, { withCredentials: true, responseType: 'text' });
    }

    public updateCoupon(coupon: Coupon): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/company/updateCoupon", coupon, { withCredentials: true, responseType: 'text' });
    }

    public updateCompany(newCompany: Company): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/company/updateCompany", newCompany, { withCredentials: true, responseType: 'text' });
    }

    public removeCoupon(couponId: number): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/company/removeCompanyCoupon?id=" + couponId, null, { withCredentials: true, responseType: 'text' });
    }
}
