import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../Validators/validaton-helper';
import { RegisterUserService } from './register-user.service';
import { User } from './User';
import { __await } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    RegistrationForm!:FormGroup;
    Submitted: boolean = false;
    success:boolean =false;
    response !:any;
    constructor(private formBuilder :FormBuilder,private router: Router,private registerUserService:RegisterUserService){}
    ngOnInit(): void {
      this.RegistrationForm = this.formBuilder.group({
        UserName:['',Validators.required  ],
        Email:['',[Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        Password:['',[Validators.required,Validators.minLength(8)]],
        confirmPassword:['',[Validators.required,confirmPasswordValidator('Password')]]
      });
    }
    routeToLogin():void{
      this.router.navigate(['/login']);
    }

   async registerUser(){
    if(!this.RegistrationForm.controls['UserName'].errors &&
     !this.RegistrationForm.controls['Email'].errors &&
     !this.RegistrationForm.controls['Password'].errors &&
     !this.RegistrationForm.controls['confirmPassword'].errors){ 
      const user : User ={
        userName: this.RegistrationForm.get('UserName')?.value,
        email: this.RegistrationForm.get('Email')?.value,
        password: this.RegistrationForm.get('Password')?.value
      }
        const result = await this.registerUserService.registerUser(user);
        this.response = result;
        if(this.response.message === "You have been registered Sucessfully"){
          this.success = true;
          this.Submitted=true;
          setTimeout(()=>{
            this.router.navigate(['/login']);
          },1000);
        }
        else{
          this.success=false;
        }
        console.log(this.success +" "+this.Submitted)
     }
   }
}
