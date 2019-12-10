import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/services/sign-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    public user: string;
    public password: string;
    public loginType: string;

    constructor(private signInService: SignInService, private router: Router) { }

    public signIn(): void {
        this.signInService.signIn(this.user, this.password, this.loginType)
            .subscribe(() => {
                alert("welcome " + this.user);
                switch (this.loginType) {
                    case 'ADMIN':
                        return this.router.navigate(['/admin']);
                    case 'COMPANY':
                        return this.router.navigate(['/company-page']);
                    default:
                        return this.router.navigate(['/customer-page']);
                }
            },

                error => {
                    alert(error.message);
                });
    }
}
