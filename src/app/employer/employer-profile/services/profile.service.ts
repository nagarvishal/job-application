import { Injectable } from '@angular/core';
import { Properties } from '../../../properties/app.properties';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    userprofile:Object = {};
    constructor(private http: HttpClient) {
        console.log("hello world");
        this.userProfileData();
    }

    public userProfileData(){

        let url = Properties.host + "/user/profile/get";

        console.log(url);

        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);

        const headers = new HttpHeaders({
            'Authorization': `Basic ${encodedCredentials}`
        });


        this.http.get(url,{ headers }).subscribe({
            next:(response)=>{
                console.log(response);
            },
            error:(error)=>{
                console.log(error);
            },
            complete:()=>{
                console.log("process has been compeleted");
            }
        })

    }
}
