import { Component } from '@angular/core';
import { AccountSettingComponent } from '../account-setting/account-setting.component';
import { ContributionsComponent } from '../contributions/contributions.component';
import { FollowingComponent } from '../following/following.component';
import { JobPreferencesComponent } from '../job-preferences/job-preferences.component';
import { NotificationComponent } from '../notification/notification.component';
import { ProfileComponent } from '../profile/profile.component';
import { JobActivityComponent } from '../job-activity/job-activity.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountSettingComponent, ContributionsComponent, FollowingComponent, JobPreferencesComponent, NotificationComponent, ProfileComponent, JobActivityComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
