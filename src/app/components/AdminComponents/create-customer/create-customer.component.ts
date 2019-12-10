import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-customer',
    templateUrl: './create-customer.component.html',
    styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

    public customer = new Customer();

    constructor(private adminService: AdminService, private router: Router) { }

    ngOnInit() {
    }

    public createCustomer(): void {
        this.adminService.createCustomer(this.customer)
            .subscribe(text => {
                alert(text); 
                this.router.navigate(['/customers']);
            },
                text => { alert(text); });
    }

}
