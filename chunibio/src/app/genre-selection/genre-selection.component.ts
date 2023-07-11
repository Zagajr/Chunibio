import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event} from '@angular/router';
import { VerifyEmail } from '../Validators/validaton-helper';
import { GenreSelectionService } from './genre-selection.service';
import { DomSanitizer,SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-genre-selection',
  templateUrl: './genre-selection.component.html',
  styleUrls: ['./genre-selection.component.css']
})
export class GenreSelectionComponent implements OnInit {
[x: string]: any;
  constructor(private route :ActivatedRoute ,private genreSelectionService:GenreSelectionService,private sanitizer:DomSanitizer){}
  sanitizeImageUrl(url:string):SafeStyle{
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
  private selectedGenres = new Array();
  public UserEmail= this.route.snapshot.paramMap.get('emailId');
  async addFavGenres():Promise<void>{
    this.genreSelectionService.addFavoriteGenres(this.UserEmail,this.selectedGenres);
   }
   public backGrounds:any = {
    Fantasy : "Fantasy.jpg",
    Horror: "Horror.webp",
    Romance:"romance.avif",
    Mystery:"Mystery.jpg",
    'Non-fiction':"NonFiction.jpg",
    Fiction : "Fiction.jpg"
   }
 public getGenreId(event:any,genre: String){
    if(event.target.checked){
      this.selectedGenres.push(genre);
    }
    else {
      this.selectedGenres = this.selectedGenres.filter(g => g!=genre);
    }
    console.log(this.selectedGenres);
 }
 
  public genres!: any;
  async ngOnInit(): Promise<void> {
    this.genreSelectionService.loadGenreImages();
    if(await VerifyEmail(this.UserEmail)){
      this.genres = await this.genreSelectionService.getGenres();
      console.log(this.genres);
    }
  }
  public hovered = false;

}
