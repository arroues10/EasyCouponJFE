import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomerPageComponent } from './components/CustomerComponents/customer-page/customer-page.component';
import { CompanyPageComponent } from './components/CompanyComponents/company-page/company-page.component';
import { CompaniesComponent } from './components/AdminComponents/companies/companies.component';
import { CustomersComponent } from './components/AdminComponents/customers/customers.component';
import { AllCouponsComponent } from './components/AdminComponents/all-coupons/all-coupons.component';
import { PurchaseCouponComponent } from './components/CustomerComponents/purchase-coupon/purchase-coupon.component';
import { CreateCouponComponent } from './components/CompanyComponents/create-coupon/create-coupon.component';
import { CompanyCouponsComponent } from './components/CompanyComponents/company-coupons/company-coupons.component';
import { EditPersonalInformationsComponent } from './components/CustomerComponents/edit-personal-informations/edit-personal-informations.component';
import { CouponsCustomerComponent } from './components/CustomerComponents/couponsCustomer/couponsCustomer.component';
import { CreateCustomerComponent } from './components/AdminComponents/create-customer/create-customer.component';
import { CreateCompanyComponent } from './components/AdminComponents/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/CompanyComponents/update-company/update-company.component';


const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "customer-page", component: CustomerPageComponent },
    { path: "company-page", component: CompanyPageComponent },
    { path: "customers", component: CustomersComponent },
    { path: "companies", component: CompaniesComponent },
    { path: "coupons", component: AllCouponsComponent },
    { path: "purchase-coupon", component: PurchaseCouponComponent },
    { path: "create-coupon", component: CreateCouponComponent },
    { path: "createCustomer", component: CreateCustomerComponent },
    { path: "createCompany", component: CreateCompanyComponent },
    { path: "couponsCustomer", component: CouponsCustomerComponent },
    { path: "company-coupons", component: CompanyCouponsComponent },
    { path: "updateCompany", component: UpdateCompanyComponent },
    { path: "edit-personal-informations", component: EditPersonalInformationsComponent },
    { path: "admin", loadChildren: "./admin.module#AdminModule" },
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
