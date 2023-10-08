import axios from "axios";
import { Request, Response } from "express";

export async function uploadBook(req:Request,res:Response){
    try{     
        const reqBody = req.body
        const fileBuffer:any = JSON.stringify(req.file);
        const requestToHomeMicroServive = new FormData();
        requestToHomeMicroServive.append('title',reqBody.title);
        requestToHomeMicroServive.append('genre',reqBody.genre);
        requestToHomeMicroServive.append('Desc',reqBody.Desc);
        requestToHomeMicroServive.append('file',fileBuffer);
    const resp:any = await axios.post('http://localhost:5000/uploadBook',requestToHomeMicroServive);
       res.status(200).json({
            message:resp.data.message
       }) 
    }
    catch(error:any){
        res.status(500).json({
            message:error.message
        });
    }
}
export async function getUserFavoriteGenres(req:Request,res:Response) {
    try {
        const FavGenresResponse = await axios.get(`http://localhost:5000/getUserFavoriteGenres?email=${req.query.email}`);
        res.status(200).json({
            favoriteGeners:FavGenresResponse.data.userSFavoriteBoooks
        });
    } catch (error:any) {
        res.status(200).json({
            message:error.message
        })
    }
}

export async function getBookById(req:Request,res:Response) {
    try {
        const bookresponse:any= await axios.get(`http://localhost:5000/getBookById?id=${req.query.id}`);
        res.status(200).json({
            book : bookresponse.data.booK
        })
    } catch (error:any) {
        res.status(404).json({
            message:error.message
        })
    }
}

export async function getBookToRead(req:Request,res:Response){
    try {
        const BookPDFresponse:any = await axios.get(`http://localhost:5000/getBookToread?bookId=${req.query.bookId}`);
        if(BookPDFresponse){
            res.status(200).json({
                bookPDF : BookPDFresponse.data.bookPDF
             });
        } 
        else{
            res.status(404).json({
                message:"can't find Book"
            });
        }

    } catch (error:any) {
        res.status(404).json({
            message:error.message
        });
    }
}