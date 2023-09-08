import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreSelectionService {

  constructor(private http :HttpClient) { }
  async getGenres(){
    const response = await this.http.get('http://localhost:3000/getGenres').toPromise();
    return response;
  }
  async addFavoriteGenres(emailId:String|null,selectedGenres:Array<String>){
    const payload = {selectedGenres:selectedGenres};
    const response = await this.http.post(`http://localhost:3000/addFavGenres/${emailId}`,payload).toPromise();
    return response;
  }
}
