import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-following',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './following.component.html',
  styleUrl: './following.component.css'
})
export class FollowingComponent {
    value:Number = 0;
    changenumber(number:Number){

        this.value = number;

    }
}
