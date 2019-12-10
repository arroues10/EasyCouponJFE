import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { AdminService } from 'src/app/services/admin.service';

@Component({
    selector: 'app-all-coupons',
    templateUrl: './all-coupons.component.html',
    styleUrls: ['./all-coupons.component.css']
})
export class AllCouponsComponent implements OnInit {

    public allCoupons: Coupon[];

    constructor(private adminService: AdminService) { }

    ngOnInit() {
        
        this.adminService.getAllCoupons()
            .subscribe(coupons => this.allCoupons = coupons,
                error => alert(error.message));
    }


}
