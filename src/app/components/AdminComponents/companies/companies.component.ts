import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

    public allCompanies: Company[];

    constructor(private adminService: AdminService) { }

    ngOnInit() {

        this.adminService.getAllCompanies()
            .subscribe(companies => this.allCompanies = companies,
                error => alert(error.message));
    }

    public deleteCompany(id: number): void {
        if (confirm("Are you sure to delete ")) {
            this.adminService.removeCompany(id)
                .subscribe(text => {
                    alert(text);
                    window.location.reload();
                },
                    text => { alert(text); }
                )
        }
    }

}
