import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-company-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, NgIf],
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.css'
})
export class CompanyCreateComponent {

  public form:any;
  public clicked:boolean = false;
  public domain:String = "";

  constructor(private fb : FormBuilder) {
    this.createCForm();
    console.log(this.form.controls);

  }

  createCForm(){

    this.form = this.fb.group({

      companyName : ["", Validators.required],
      description : ["", Validators.required],
      industry : ["", Validators.required],
      website : ["", Validators.required],
      location : ["", Validators.required],
      email_domains : this.fb.array([]),
      employeeCount : [0, Validators.required]
    })

  }

  get formcontrol(){
    return this.form.controls;
  }



  addDomain(target:HTMLInputElement){
    console.log(target);
    console.log(target.value);
    const domains = this.formcontrol.email_domains as FormArray;
    domains.push(this.fb.control(target.value, Validators.required));
    console.log(this.formcontrol.email_domains.value);

  }

  onSubmit(){
    console.log(((this.formcontrol.companyName.touched && (!this.formcontrol.companyName.valid)) || (!this.form.valid && this.clicked)));
    console.log(!this.formcontrol?.companyName?.errors?.required);
  }


}
