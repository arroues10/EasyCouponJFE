import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-couponsCustomer',
    templateUrl: './couponsCustomer.component.html',
    styleUrls: ['./couponsCustomer.component.css']
})
export class CouponsCustomerComponent implements OnInit {

    public allCouponsCustomer: Coupon[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getAllCustomerCoupons()
            .subscribe(coupons => this.allCouponsCustomer = coupons,
                error => alert(error.message));
    }
}
