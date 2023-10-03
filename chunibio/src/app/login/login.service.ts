import { Injectable, TRANSLATIONS } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest,HttpResponse } from '@angular/common/http';
import { Observable, Observer, catchError } from 'rxjs';
import { UserCreds } from "../models/UserCreds";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isValidUser :boolean = false;
  constructor(private http : HttpClient,
    private router:Router) { }
  async loginUser(userCreds : UserCreds){
    const options ={headers: new HttpHeaders({'content-Type':'application/json'}),
    withCredentials:true,
    observe:"response" as "response"
  }
    let response ;
     response = await this.http.post('http://localhost:3000/loginUser', userCreds,options).toPromise();
    //console.log(response);
    return response;
  }
 
}
