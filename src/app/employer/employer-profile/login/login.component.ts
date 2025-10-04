import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],   
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']             
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  public userdata : any;

  constructor(private fb: FormBuilder,private profileService : ProfileService, private router: Router) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  onSubmit(){
    let requestbody = this.form.value;

    this.profileService.fetchUserData(requestbody).subscribe({
      next:(response:any)=>{

        this.userdata = response.data;

        sessionStorage.setItem("email",this.userdata.email);
        sessionStorage.setItem("password",this.userdata.password);
        sessionStorage.setItem("username",this.userdata.username);
        sessionStorage.setItem("userid",this.userdata.userId);

        this.router.navigate(["/user/profile"]);
        


      },
      error:(e)=>{
        console.log(e);
      },
      complete : ()=>{
        console.log("Successfuylly Completed");
      }
    })
    
  }
}
