import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    RegistrationForm!:FormGroup;
    Submitted!:boolean;
    constructor(private formBuilder :FormBuilder,private router: Router){}
    ngOnInit(): void {
      this.RegistrationForm = this.formBuilder.group({
        UserName:['',Validators.required],
        Email:['',Validators.required],
        Password:['',Validators.required],
        confirmPassword:['',Validators.required]
      });
    }
    routeToLogin():void{
      this.router.navigate(['/login']);
    }
}
