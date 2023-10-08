import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }
  async uploadBookToDB(formData:FormData){
    const uploadResult = await this.http.post("http://localhost:3000/uploadBook",formData).toPromise();
    return uploadResult;
  }

  async getUserFavoriteGeners(email:string){
    const FavoriteGenreResponse = await this.http.get(`http://localhost:3000/getUserFavoriteGenres?email=${email}`).toPromise()
    return FavoriteGenreResponse;
  }

  async getBookToRead(BookId:String) {
    const bookPdf =await this.http.get(`http://localhost:3000/getBookToread?bookId=${BookId}`).toPromise();

    return bookPdf;

  }
}
