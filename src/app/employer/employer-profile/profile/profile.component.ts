import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit,OnDestroy {

  userprofile:any = {};
  usereducation:any = [];
  cusereducation:any = {};
  editEducation : boolean = false;
  addEducation : boolean = false;
  educationForm : any;
  constructor(private profileService : ProfileService, private fb : FormBuilder){

  }

  popEditEducation(index:number){

    if(this.editEducation == true)this.editEducation = false;
    else{
        this.editEducation = true;
        this.cusereducation = this.usereducation[index];
        this.educationForm = this.fb.group({
          instituteName : [this.cusereducation.instituteName,Validators.required],
          yearOfPassing : [this.cusereducation.yearOfPassing,Validators.required],
          grads : [this.cusereducation.grads,Validators.required],
          degree : [this.cusereducation.degree,Validators.required],
          userId : [this.cusereducation.userId,Validators.required],
          educationId : [this.cusereducation.educationId,Validators.required],
        })
    }
  }
  popAddEducation(){
    if(this.addEducation == true)this.addEducation = false;
    else{
      this.addEducation = true;
      this.educationForm = this.fb.group({
          instituteName : ["",Validators.required],
          yearOfPassing : ["",Validators.required],
          grads : ["",Validators.required],
          degree : ["",Validators.required],
          userId : [sessionStorage.getItem("userid"),Validators.required],
          educationId : ["",Validators.required],
        })

    }
  }

  onEducationSubmit(){

    console.log(this.educationForm.value);
    if(this.editEducation == true){
        this.profileService.callPutAPI("/user/education/update/"+this.educationForm.value.educationId,this.educationForm.value).subscribe({
            next:(response)=>{
              console.log(response);
            },
            error : (e)=>{
              console.log(e);
            },
            complete:()=>{
              console.log("education update successfully");
              this.fetchUserEducation();
            }
        })
    }
    else if(this.addEducation == true){
        this.profileService.callPostAPI("/user/education/create"+this.educationForm.value.educationId,this.educationForm.value).subscribe({
            next:(response)=>{
              console.log(response);
            },
            error : (e)=>{
              console.log(e);
            },
            complete:()=>{
              console.log("education create successfully");
              this.fetchUserEducation();
            }
        })
    }


  }

  closeEditEducation(){
    this.editEducation = false;
  }
  
  deleteInformation(){
    this.profileService.callDeleteAPI("/user/education/delete/"+this.educationForm.value.educationId).subscribe({
        next : (response)=>{
          console.log(response);
        },
        error : (e)=>{
          console.log(e);
        },
        complete : ()=>{
          console.log("education create successfully");
          this.fetchUserEducation();
        }
    })
  }
  

  ngOnDestroy(): void {

    this.profileService.fetchUserEducation().subscribe().unsubscribe();

  }

  public fetchUserEducation(){
    this.profileService.fetchUserEducation().subscribe({
        next : (response:any)=>{
          console.log(response);
          this.usereducation = response.data;
        },
        error : (e)=>{
          console.log(e);
        },
        complete : ()=>{
          console.log("process has been compeleted");
        }
    })
  }

  ngOnInit() {

    this.profileService.userprofile.subscribe(profile=>{
      this.userprofile = profile;
      console.log("userprofiledata=>",this.userprofile);
    })

    this.fetchUserEducation();

  }



}
