import { Component } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { text } from '@angular/core/src/render3';

@Component({
    selector: 'app-create-coupon',
    templateUrl: './create-coupon.component.html',
    styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent {

    public coupon = new Coupon();

    constructor(private companyService: CompanyService, private router: Router) { }

    public createCoupon(): void {
        this.companyService.createCoupon(this.coupon)
            .subscribe(text => {
                alert(text);
                this.router.navigate(["/company-page"]);
            },
                text => { alert(text); });
    }

}
