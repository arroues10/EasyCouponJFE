import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Company } from '../models/company';
import { Coupon } from '../models/coupon';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private httpClient: HttpClient) { }

    public getAllCustomers(): Observable<Customer[]> {
        return this.httpClient.get<Customer[]>("http://localhost:8080/couponsystemSolal/webapi/admin/getAllCustomers", { withCredentials: true });
    }

    public getAllCompanies(): Observable<Company[]> {
        return this.httpClient.get<Company[]>("http://localhost:8080/couponsystemSolal/webapi/admin/getAllCompanies", { withCredentials: true });
    }

    public getAllCoupons(): Observable<Coupon[]> {
        return this.httpClient.get<Coupon[]>("http://localhost:8080/couponsystemSolal/webapi/admin/getAllCoupons", { withCredentials: true });
    }

    public createCustomer(customer: Customer): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/admin/createCustomer", customer, { withCredentials: true, responseType: 'text' });
    }

    public createCompany(company: Company): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/admin/createCompany", company, { withCredentials: true, responseType: 'text' });
    }

    public removeCompany(companyId: number): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/admin/removeCompany?id=" + companyId,  null, { withCredentials: true, responseType: 'text' });
    }

    public removeCustomer(customerId: number): Observable<any> {
        return this.httpClient.post("http://localhost:8080/couponsystemSolal/webapi/admin/removeCustomer?id=" + customerId,  null, { withCredentials: true, responseType: 'text' });
    }


}
