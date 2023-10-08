import { Request, Response } from "express";
import{ IUser } from "../Models/User.Model";
import user from "../Models/User.Model";
import { error } from "console";
import Book from "../Models/Book";

export async function getUserFavoriteGenres(req:Request,res:Response) {
   try {
        const u:IUser|null  = await user.findOne({email:req.query.email});
        let UsersFavoriteBooks = []
        if(u){
           const usersFaoriteBooks = await Book.find({genre:{$in:u.FavGenre}});
           for(let i =0;i<usersFaoriteBooks.length;i++){
            const {bookId,title,genre,Desc}= usersFaoriteBooks[i];
            UsersFavoriteBooks.push({bookId,title,genre,Desc});
           }
           res.status(200).json({
            userSFavoriteBoooks:UsersFavoriteBooks
        })
        }
        else{
            throw  error("User not found");
        }
   } catch (error:any) {
    res.status(404).json({
        message:error.message
    });
   }
} 