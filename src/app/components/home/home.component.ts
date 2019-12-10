import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // Data Members
    public name: string;
    public password: string;
    public var: Observable<string>;
    public toto: string;


    constructor(private title: Title, private httpClient: HttpClient) { }

    // Lifecycle Hooks
    ngOnInit(): void {
        
    }

}
