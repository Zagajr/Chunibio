import { Request, Response } from "express";
import multer from "multer";
import Book from "../Models/Book";

const storage = multer.memoryStorage();
export const upload = multer({storage});

export async function uploadBook(req:Request,res:Response) {
    try{
        if (!req.body.file) {
            return res.status(400).json({ message: 'No file uploaded' });
          }
        const file = JSON.parse(req.body.file); 
        const {title,genre,Desc} =req.body; 
        const id = await getbookId(); 
        const book = new Book({
            bookId:id,
            title,
            genre,
            Desc,
            file:{
                data:file.buffer,
                contentType:file.mimetype
            },
        });
        await book.save();
        res.status(200).json({
            message:"file Uploaded sucessfully"
        });
    }
    catch(error:any){
            res.status(500).json({
                message:"failed to upload file",
                error : error.message
            })
    }
}

async function getbookId():Promise<String>{
    try{
        let books = await Book.count({});
        books++;
        let id:string = "b"+books;
        return id;
        
    }
    catch(error:any){
       throw new Error(error.message);
    }
}


