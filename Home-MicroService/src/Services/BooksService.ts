import { Request, Response } from "express";
import Book from "../Models/Book";

export async function getBookById(req:Request,res:Response) {
    try {
        const book = await Book.findOne({bookId:req.query.id});
        if(book){
            res.status(200).json({
                booK:book
            })
        }
    } catch (error:any) {
        res.status(200).json({
            message:error.message
        })
    }
}
export async function getBookToRead(req:Request,res:Response) {
    try {
        const book =await Book.findOne({bookId:req.query.bookId});
        if(book){
            res.status(200).json({
               bookPDF : book.file
            });
        }
        else{
            res.status(404).json({
                message:"could'nt find Book"
            });
        }

    } catch (error:any) {
        res.status(404).json({
            message:error.message
        });
    }
}