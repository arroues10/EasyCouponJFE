import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update-company',
    templateUrl: './update-company.component.html',
    styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

    public company = new Company();
    public newCompany = new Company();

    constructor(private companyService: CompanyService, private router: Router) { }

    ngOnInit() {
        this.companyService.getCompany()
            .subscribe(company => this.company = company,
                error => alert(error.message));
    }

    public updateCompany(): void {
        this.newCompany.id = this.company.id;
        this.companyService.updateCompany(this.newCompany)
            .subscribe(text => {
                alert(text);
                return this.router.navigate(['/company-page']);
            },
                text => { alert(text); });
    }

}
