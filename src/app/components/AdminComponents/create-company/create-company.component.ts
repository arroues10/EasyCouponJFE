import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';
import { text } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

    public company = new Company();

    constructor(private adminService: AdminService, private router: Router) { }

    ngOnInit() {
    }

    public createCompany(): void {
        this.adminService.createCompany(this.company)
            .subscribe(text => {
                alert(text);
                this.router.navigate(['/companies']);
            },
                text => { alert(text); });
    }

}
