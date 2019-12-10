import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignInService {

    constructor(private httpClient: HttpClient) { }

    public signIn(user: string, password: string, loginType: string): Observable<any> {
        return this.httpClient.post('http://localhost:8080/couponsystemSolal/login?user=' + user + '&password=' + password + '&loginType=' + loginType, null, { withCredentials: true , responseType: 'text'} );
    }
}
