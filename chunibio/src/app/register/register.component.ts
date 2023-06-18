import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../Validators/validaton-helper';

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
        UserName:['',Validators.required  ],
        Email:['',[Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        Password:['',[Validators.required,Validators.minLength(8)]],
        confirmPassword:['',[Validators.required,confirmPasswordValidator('Password')]]
      });
    }
    routeToLogin():void{
      this.router.navigate(['/login']);
    }
}
