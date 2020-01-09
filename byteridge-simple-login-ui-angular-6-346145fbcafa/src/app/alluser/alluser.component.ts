import {Component, Inject} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{User} from '../_models/user'
@Component({templateUrl:'alluser.component.html'})

export class AllUserComponent{
    constructor(@Inject(HttpClient) private httpClient:HttpClient){}
    auditor:User[]=[];
    

    allUser(){
        this.httpClient.get<User[]>("/getauditor"+this.auditor)
    }
}