import axios from "axios";
import { Request, Response } from "express";

export async function uploadBook(req:Request,res:Response){
    try{     
        const reqBody = req.body
        const fileBuffer:any = req.file?.buffer;
        const requestToHomeMicroServive = new FormData();
        requestToHomeMicroServive.append('title',reqBody.title);
        requestToHomeMicroServive.append('genre',reqBody.genre);
        requestToHomeMicroServive.append('Desc',reqBody.Desc);
        requestToHomeMicroServive.append('file',fileBuffer);
    const resp:any = await axios.post('http://localhost:5000/uploadBook',requestToHomeMicroServive);
       res.status(200).json({
            message : resp.message
       }) 
    }
    catch(error:any){
        res.status(500).json({
            message:error.message
        });
    }
}