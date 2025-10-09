import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-preferences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-preferences.component.html',
  styleUrl: './job-preferences.component.css'
})
export class JobPreferencesComponent {
    userprofile:any = {};
    userExperiences:any = [];
    constructor(private profileService : ProfileService){
  
    }
  
    fetchUserExperience(){
      this.profileService.callGetAPI("/user/experience/get").subscribe({
        next : (response:any)=>{
          console.log(response);
          this.userExperiences = response.data;

        },
        error : (e)=>{
          console.log(e);
        },
        complete:()=>{
          console.log("fetch user experience");
        }
      })
    }
    ngOnInit() {
  
      this.profileService.userprofile.subscribe(profile=>{
        this.userprofile = profile;
        console.log("userprofiledata=>",this.userprofile);
      })

      this.fetchUserExperience();
      
  
    }
}
