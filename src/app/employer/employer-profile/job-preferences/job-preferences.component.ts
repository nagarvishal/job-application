import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';
import { NotApplicable } from '../pipes/notapplicable.pipe';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-preferences',
  standalone: true,
  imports: [CommonModule, NotApplicable, ReactiveFormsModule],
  templateUrl: './job-preferences.component.html',
  styleUrl: './job-preferences.component.css'
})
export class JobPreferencesComponent {

    userprofile:any = {};
    userExperiences:any = [];
    addexp:boolean = false;
    editexp:boolean = false;
    expform:any;
    clicked:boolean = false;
    
    constructor(private profileService : ProfileService,private fb:FormBuilder){
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
    addexptemplate(){
      this.addexp = true;
      this.expform = this.fb.group({
        companyName : ["",Validators.required],
        jobTitle : ["",Validators.required],
        startDate : ["",Validators.required],
        endDate : [""],
        currentlyWorking:[false],
        description:[""]
      })
      console.log(this.expform);
    }

    get expformcontrol(){
      return this.expform.controls;
    }

    

    clickcheckbox($event:any){
      if($event.target.checked == true){
        this.expformcontrol.endDate.value = "";
        console.log(this.expformcontrol);
      }
      console.log($event);
    }

    addExperience(){
      this.clicked = true;
      if(this.expform.valid){
        const url = "user/experience/create";
        this.profileService.callPostAPI(url,this.expform.value).subscribe({
          next : (response)=>{
            console.log(response);
          },
          error : (e)=>{
            console.log(e);
          },
          complete : ()=>{
            console.log("process has been compeleted");
          }
        })
      }
      console.log("this.expform.value=>",this.expform.value);
    }






    ngOnInit() {
  
      this.profileService.userprofile.subscribe(profile=>{
        this.userprofile = profile;
        console.log("userprofiledata=>",this.userprofile);
      })

      this.fetchUserExperience();
      
  
    }
}
