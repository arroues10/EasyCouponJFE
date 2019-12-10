import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    public allCustomers: Customer[];

    constructor(private adminService: AdminService) { }

    ngOnInit() {

        this.adminService.getAllCustomers()
            .subscribe(customers => { this.allCustomers = customers; },
                error => { alert(error.message); });
    }

    public deleteCustomer(id: number): void {
        if (confirm("Are you sure to delete ")) {
            this.adminService.removeCustomer(id)
                .subscribe(text => {
                    alert(text);
                    window.location.reload();
                },
                    text => { alert(text); }
                )
        }
    }

}
