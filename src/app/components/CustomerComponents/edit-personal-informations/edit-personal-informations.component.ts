import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-edit-personal-informations',
    templateUrl: './edit-personal-informations.component.html',
    styleUrls: ['./edit-personal-informations.component.css']
})
export class EditPersonalInformationsComponent implements OnInit {

    public customer = new Customer();
    public newCustomer = new Customer();

    constructor(private customerService: CustomerService, private router: Router) { }



    ngOnInit() {
        this.customerService.getCustomer()
            .subscribe(customer => this.customer = customer,
                error => alert(error.message));
    }

    public updateCustomer(): void {
        this.newCustomer.id = this.customer.id;
        this.customerService.updateCustomer(this.newCustomer)
            .subscribe(text => {
                alert(text);
                return this.router.navigate(['/customer-page']);
            },
                text => { alert(text); });
    }

}
