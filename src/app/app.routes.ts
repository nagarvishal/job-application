import { Routes } from '@angular/router';
import { DashboardComponent } from './employer/employer-profile/dashboard/dashboard.component';
import { LoginComponent } from './employer/employer-profile/login/login.component';
import { COMPANY_ROUTES } from "./company/routes/company.routes";

export const routes: Routes = [
    { path : "user/profile" , component : DashboardComponent, title : "User Profile Page" },
    { path : "login" , component : LoginComponent, title : "Login Page"},
    ...COMPANY_ROUTES
];
