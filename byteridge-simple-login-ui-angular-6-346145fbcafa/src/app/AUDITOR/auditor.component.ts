import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService,AuthenticationService} from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({templateUrl:'auditor.component.html'})

export class AuditorComponent implements OnInit {
    
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService:AuthenticationService,
        private alertService:AlertService,
        private formBuilder: FormBuilder,){}        
        ngOnInit() {
            this.loginForm = this.formBuilder.group({
                username: ['', Validators.required],
                password: ['', Validators.required]
            });
    
            this.authenticationService.logout();
    
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
        get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}