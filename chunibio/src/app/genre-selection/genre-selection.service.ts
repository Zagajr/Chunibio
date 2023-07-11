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
  async loadGenreImages(){
    const folderPath = './GenreImages/';

    this.http.get(folderPath , {responseType:'text'}).subscribe(data => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data,'text/html');
      const imgEmement =htmlDoc.getElementsByTagName('img');

      for (let i = 0; i < imgEmement.length; i++) {
        const imageUrl:any =imgEmement[i].getAttribute('src');
        localStorage.setItem(`image${i}`,imageUrl);
        
      }
    });
  }
}
