
import { Routes } from '@angular/router';
import { CompanyCreateComponent } from '../components/company-create/company-create.component';
import {CompanyUpdateComponent} from "../components/company-update/company-update.component";
import {CompanyProfileComponent} from "../components/company-profile/company-profile.component";

export const COMPANY_ROUTES: Routes = [
  { path : "company/profile" , component : CompanyProfileComponent},
  { path : "company/create" , component : CompanyCreateComponent },
  { path : "company/update", component : CompanyUpdateComponent}

];
