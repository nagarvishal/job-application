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

    public fetchUserEducation(){
        let url = Properties.host + "/user/education/get";
        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);

        const headers = new HttpHeaders({
            'Authorization': `Basic ${encodedCredentials}`,
            'Accept': 'application/json'
        });

        return this.http.get( url,{ headers });
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

    public callPostAPI(url:string, requestbody:any){

        url = Properties.host + url;
        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);
        const headers = new HttpHeaders({
           
            'Authorization': `Basic ${encodedCredentials}`,
            'Accept': 'application/json'
        });
        return this.http.post(url,requestbody,{headers});

    }

    public callGetAPI(url:string){
 
        url = Properties.host + url; 

        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);

        const headers = new HttpHeaders({
           
            'Authorization': `Basic ${encodedCredentials}`,
            'Accept': 'application/json'
        });
        return this.http.get(url, {headers});
        
    }

    public callPutAPI(url:string,requestbody:any){

        url = Properties.host + url; 

        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);

        const headers = new HttpHeaders({
           
            'Authorization': `Basic ${encodedCredentials}`,
            'Accept': 'application/json'
        });
        return this.http.put(url, requestbody ,{headers});
        
    }

    public callDeleteAPI(url:string){

        url = Properties.host + url;

        const encodedCredentials = window.btoa(`${Properties.username}:${Properties.password}`);

        const headers = new HttpHeaders({
           
            'Authorization': `Basic ${encodedCredentials}`,
            'Accept': 'application/json'
        });
        return this.http.delete(url,{headers});
        
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
