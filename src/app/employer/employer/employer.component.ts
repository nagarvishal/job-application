import { Component } from '@angular/core';
import { DashboardComponent } from '../employer-profile/dashboard/dashboard.component';

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './employer.component.html',
  styleUrl: './employer.component.css'
})
export class EmployerComponent {
    
}
