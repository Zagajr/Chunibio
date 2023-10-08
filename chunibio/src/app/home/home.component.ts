import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { GenreSelectionService } from '../genre-selection/genre-selection.service';
import { HomeService } from './home.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from './Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  public book:any=null;
  public showBook:boolean = false;
  public pdfURL:string='';
  uploadForm!: FormGroup
  public fileToUpload! :File;
  public usersFavoriteBooks:Array<any> =[];
  public showpopup:boolean = false;
  public genres:any = {}
  public isUploaded:boolean = false;
  public backGrounds:any = {
    Fantasy : "Fantasy.jpg",
    Horror: "Horror.webp",
    Romance:"romance.avif",
    Mystery:"Mystery.jpg",
    'Non-fiction':"NonFiction.jpg",
    Fiction : "Fiction.jpg"
   }
  constructor(
    private formBuilder: FormBuilder ,
    private genreSelectionService : GenreSelectionService,
    private homeService : HomeService,
    private cookie : CookieService,
    private router : Router,
    private activeRoute:ActivatedRoute
    ){}
  async ngOnInit(): Promise<void> {
    //call to get all genres for upload form dropDown 
    const GenreResponse  = await this.genreSelectionService.getGenres()
    this.genres = GenreResponse;
    const email:any= this.activeRoute.snapshot.paramMap.get('emailId');


    //call to get users favorite books 
    const usersFavoriteBooksResponse :any = await this.homeService.getUserFavoriteGeners(email);
    this.usersFavoriteBooks = usersFavoriteBooksResponse.favoriteGeners;
   // console.log(this.usersFavoriteBooks);


   //upload form group
    this.uploadForm = this.formBuilder.group({
      Genre : ['',Validators.required],
      Title : ['',Validators.required],
      description:['',Validators.required],
      file:['',Validators.required]
    })
  }
  //upload button to show upload form
  uploadButtonClick(){
    this.showpopup = true;
    this.uploadForm.reset();
  }
  //when close is clicked in the upload book form
  onclose(){
    this.showpopup = false;
  }


  // when a file is selected
  onFileSelect(event:any):void{
    console.log("inside onfileselect");
    if(event.target.files.length>0){
      console.log("file exists");
    }
    const file = event.target.files[0];
    //this.uploadForm.get('file')?.setValue(file);
    this.fileToUpload = file; 
  }


  //upload button to upload Book
  uploadBook(){
    if(this.uploadForm.invalid){
      console.log("invalid form")
      return;
    }
    const formData = new FormData();
    formData.append('title',this.uploadForm.get('Title')?.value);
    formData.append('genre',this.uploadForm.get('Genre')?.value);
    formData.append('Desc',this.uploadForm.get('description')?.value);
    formData.append('file',this.fileToUpload);
    this.homeService.uploadBookToDB(formData).then((res:any)=>{
      console.log(res);
      if(res.message === "file Uploaded sucessfully"){
          this.isUploaded =true;
          setTimeout(() => {
            this.showpopup = false;
            this.isUploaded = false;
          },1000);
      }
    });
  }


  //logOut from side bar
  logout(){
   // console.log(this.cookie.get('creds'));
    this.cookie.delete("creds",'/');
    this.cookie.delete("email");
    this.router.navigate(['/login']);
  }

//when user clicks on the book
  async getBookPdfToRead(event:Book){
    this.showBook = true;
    const book:any = await this.homeService.getBookToRead(event.bookId);
    console.log(typeof(book.bookPDF.data.data));
    const blob = new Blob([new Uint8Array(book.bookPDF.data.data).buffer]);
    this.pdfURL = URL.createObjectURL(blob);
    console.log(this.pdfURL);
  }

  //to close book
  onBook(){
    this.showBook = false;
  }
}
