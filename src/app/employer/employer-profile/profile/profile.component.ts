import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

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
