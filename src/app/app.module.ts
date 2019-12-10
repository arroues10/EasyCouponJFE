import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from "@angular/forms";
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CustomerPageComponent } from './components/CustomerComponents/customer-page/customer-page.component';
import { CustomersComponent } from './components/AdminComponents/customers/customers.component';
import { PurchaseCouponComponent } from './components/CustomerComponents/purchase-coupon/purchase-coupon.component';
import { EditPersonalInformationsComponent } from './components/CustomerComponents/edit-personal-informations/edit-personal-informations.component';
import { CompanyPageComponent } from './components/CompanyComponents/company-page/company-page.component';
import { CompanyCouponsComponent } from './components/CompanyComponents/company-coupons/company-coupons.component';
import { CreateCouponComponent } from './components/CompanyComponents/create-coupon/create-coupon.component';
import { CompaniesComponent } from './components/AdminComponents/companies/companies.component';
import { AllCouponsComponent } from './components/AdminComponents/all-coupons/all-coupons.component';
import { CouponsCustomerComponent } from './components/CustomerComponents/couponsCustomer/couponsCustomer.component';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { CreateCustomerComponent } from './components/AdminComponents/create-customer/create-customer.component';
import { CreateCompanyComponent } from './components/AdminComponents/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/CompanyComponents/update-company/update-company.component';

@NgModule({
    declarations: [LayoutComponent, FooterComponent, MenuComponent, HomeComponent, AboutComponent, PageNotFoundComponent, CustomersComponent, CustomerPageComponent, PurchaseCouponComponent, CouponsCustomerComponent, EditPersonalInformationsComponent, CompanyPageComponent, CompanyCouponsComponent, CreateCouponComponent, SignInComponent, CompaniesComponent, AllCouponsComponent, LocalDatePipe, CreateCustomerComponent, CreateCompanyComponent, UpdateCompanyComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
