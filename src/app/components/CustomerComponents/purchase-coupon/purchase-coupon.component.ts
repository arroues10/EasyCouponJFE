import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-purchase-coupon',
    templateUrl: './purchase-coupon.component.html',
    styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

    public couponId: number;

    constructor(private customerService: CustomerService, private router: Router) { }

    ngOnInit() {
    }

    public purchaseCoupon(): void {
        this.customerService.purchaseCoupon(this.couponId)
            .subscribe(text => {
                alert(text);
                this.router.navigate(["/customer-page"]);
            },
                text => { alert(text+"ouille"); })
    }

}
