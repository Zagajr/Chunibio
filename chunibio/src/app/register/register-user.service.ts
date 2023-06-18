import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from './User';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

 async registerUser(User:User) {
    console.log(JSON.stringify(User));
    const options = new HttpHeaders({'content-Type':'application/json'});
    return this.http.post('http://localhost:3000/register',User).toPromise().then((data)=>{
      console.log(data)
    });
  }
  
}
