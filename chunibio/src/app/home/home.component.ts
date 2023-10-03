import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { GenreSelectionService } from '../genre-selection/genre-selection.service';
import { HomeService } from './home.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
   uploadForm!: FormGroup
  public fileToUpload! :File;
  public showpopup:boolean = false;
  public genres:any = {}
  constructor(
    private formBuilder: FormBuilder ,
    private genreSelectionService : GenreSelectionService,
    private homeService : HomeService,
    private cookie : CookieService,
    private router : Router
    ){}
  async ngOnInit(): Promise<void> {
    const GenreResponse  = await this.genreSelectionService.getGenres()
    this.genres = GenreResponse;
    this.uploadForm = this.formBuilder.group({
      Genre : ['',Validators.required],
      Title : ['',Validators.required],
      description:['',Validators.required],
      file:['',Validators.required]
    })
  }
  uploadButtonClick(){
    this.showpopup = true;
  }
  onclose(){
    this.showpopup = false;
  }
  onFileSelect(event:any):void{
    console.log("inside onfileselect");
    if(event.target.files.length>0){
      console.log("file exists");
    }
    const file = event.target.files[0];
    //this.uploadForm.get('file')?.setValue(file);
    this.fileToUpload = file;
    
  }
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
    this.homeService.uploadBookToDB(formData);
  }
  logout(){
   // console.log(this.cookie.get('creds'));
    this.cookie.delete("creds",'/');
    this.cookie.delete("email");
    this.router.navigate(['/login']);
  }
}
