import { Injectable } from '@angular/core';
import { Properties } from '../../../properties/app.properties';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private userProfileSource = new BehaviorSubject<any>(null);
    userprofile = this.userProfileSource.asObservable();

    constructor(private http: HttpClient) {
        
    }

    public fetchUserData(RequestBody:any){
        
        let url = Properties.host + "/user/fetch";
        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);

        const headers = new HttpHeaders({
            'Authorization': `Basic ${encodedCredentials}`,
            'Accept': 'application/json'
        });

        return this.http.post( url,RequestBody, { headers });
        
    }

    public userProfileData(){

        let url = Properties.host + "/user/profile/get";

        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);

        const headers = new HttpHeaders({
            'Authorization': `Basic ${encodedCredentials}`,
            'Accept': 'application/json'
        });


        this.http.get(url,{ headers }).subscribe({
            next:(response:any)=>{
                this.userProfileSource.next(response.data);
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
