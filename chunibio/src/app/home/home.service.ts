import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  async uploadBookToDB(formData:FormData){
    this.http.post("http://localhost:3000/uploadBook",formData).subscribe((response)=>{
      console.log(response);
    })
  }
}
