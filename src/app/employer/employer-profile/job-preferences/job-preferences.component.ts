import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-job-preferences',
  standalone: true,
  imports: [],
  templateUrl: './job-preferences.component.html',
  styleUrl: './job-preferences.component.css'
})
export class JobPreferencesComponent {
  userprofile:any = {};
    constructor(private profileService : ProfileService){
  
    }
  
    ngOnInit() {
  
      this.profileService.userprofile.subscribe(profile=>{
        this.userprofile = profile;
        console.log("userprofiledata=>",this.userprofile);
      })
  
    }
}
