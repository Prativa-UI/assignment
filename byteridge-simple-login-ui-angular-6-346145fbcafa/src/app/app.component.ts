import { Component, OnInit } from '@angular/core';
import {IpServiceService} from './_services/ipservice.service';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit { 
    constructor(private ip:IpServiceService){}
    ipAddress:String;
    ngOnInit()
    {
        this.getIp();
    }
    getIp(){
        this.ip.getIpAddress().subscribe((res:any)=>{
            this.ipAddress=res.ip;
        });
    }
}