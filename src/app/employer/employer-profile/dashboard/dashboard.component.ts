import { Component, Inject } from '@angular/core';
import { AccountSettingComponent } from '../account-setting/account-setting.component';
import { ContributionsComponent } from '../contributions/contributions.component';
import { FollowingComponent } from '../following/following.component';
import { JobPreferencesComponent } from '../job-preferences/job-preferences.component';
import { NotificationComponent } from '../notification/notification.component';
import { ProfileComponent } from '../profile/profile.component';
import { JobActivityComponent } from '../job-activity/job-activity.component';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../services/profile.service';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, AccountSettingComponent, ContributionsComponent, FollowingComponent, JobPreferencesComponent, NotificationComponent, ProfileComponent, JobActivityComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    userprofile: any = {};
    constructor(private profileService: ProfileService) {

        this.profileService.userProfileData();

    }

    value: Number = 0;
    changevalue(number: Number) {
        this.value = number;
    }


    ngOnInit() {
        
        this.profileService.userProfileData();

    }


}
