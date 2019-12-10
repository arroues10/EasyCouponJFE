import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { text } from '@angular/core/src/render3';

@Component({
    selector: 'app-company-coupons',
    templateUrl: './company-coupons.component.html',
    styleUrls: ['./company-coupons.component.css']
})
export class CompanyCouponsComponent implements OnInit {

    constructor(private companyService: CompanyService, private router: Router) { }

    public companyCoupons: Coupon[];
    public coupon = new Coupon();
    public editCouponButton: boolean = false;

    ngOnInit() {
        this.companyService.getAllCouponsCompany()
            .subscribe(coupons => this.companyCoupons = coupons,
                error => alert(error.message));
    }

    public deleteCoupon(id: number): void {
        if (confirm("Are you sure to delete ")) {
            this.companyService.removeCoupon(id)
                .subscribe(text => { alert(text); },
                    text => { alert(text); }
                )
        }
    }

    public edit(coupon: Coupon) {
        this.coupon = coupon;
        this.editCouponButton = !this.editCouponButton;
    }

    public update(coupon: Coupon): void {
        this.editCouponButton = false;
        this.companyService.updateCoupon(this.coupon).subscribe(text => {
            alert(text);
            this.editCouponButton = false;
            window.location.reload();
        },
            error => alert(error.message));
    }

}
