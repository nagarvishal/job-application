import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this


@Component({
  selector: 'app-job-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-activity.component.html',
  styleUrl: './job-activity.component.css'
})
export class JobActivityComponent {
    value:Number = 0;
    changenumber(value1:Number){
        this.value = value1;
    }
}
