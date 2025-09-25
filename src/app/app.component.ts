import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployerComponent } from './employer/employer/employer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-application';
  
}
