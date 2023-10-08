import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { LoginService } from './login.service';
import { UserCreds } from '../models/UserCreds';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  Submitted :boolean = false;
  constructor(
    private formBuilder :FormBuilder,
    private router:Router,
    private logger:LoginService,
    private cookie : CookieService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
  routeToRegistrationForm():void{
    this.router.navigate(['/register']);
  }
  async loginUser():Promise<void>{
    if(!this.loginForm.controls['userName'].errors &&
    !this.loginForm.controls['password'].errors){
      const userCreds:UserCreds = {
        userName :this.loginForm.get('userName')?.value,
        passWord:this.loginForm.get('password')?.value
      }
      let result =  this.logger.loginUser(userCreds);
      result.then(()=>{
        let cookie = this.cookie.get('email');
        this.router.navigate([`/HomePage/${cookie}`]);
        console.log(cookie);
      })
      this.Submitted = true;
      console.log("routed to Home")
    }
    else{
      this.Submitted = false
    }
  }
  
}
