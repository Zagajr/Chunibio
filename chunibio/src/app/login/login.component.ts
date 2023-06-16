import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  Submitted! :boolean;
  constructor(private formBuilder :FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
  routeToRegistrationForm():void{
    this.router.navigate(['/register']);
  }

}
