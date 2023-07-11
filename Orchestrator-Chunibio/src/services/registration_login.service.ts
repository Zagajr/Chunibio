import axios from "axios"

import { Request, Response } from "express";

export async function  registerUser(req : Request , res : Response ){
    try{
        //console.log(req);
        const result = await axios.post('http://localhost:4000/register',req.body);
        res.status(200).json({
            message:result.data.message
        })
    }
    catch(err:any){
        res.status(404).json({
            message: err.message
        });
    }
    }
export async function verifyEmail(req:Request,res:Response) {
    try{
        const result = await axios.get(`http://localhost:4000/verifyEmail/${req.params.email}`);
        res.status(200).json({
            message:result.data.message
        })
    }
    catch(err:any){
        res.status(404).json({
            message: err.message
        });
    }
}    
export async function getGenres(req:Request,res:Response) {
    try{
        const result = await axios.get('http://localhost:4000/getGenres');
        res.status(200).json({
            message:result.data.message
        })
    }
    catch(err:any){
        res.status(404).json({
            message: err.message
        });
    }
}
export async function addFavGenres(req:Request,res:Response){
    try{
        const result = await axios.post(`http://localhost:4000/addFavGenres/${req.params.emailId}`,req.body);
        res.status(200).json({
            message:result.data.message
        })
    }
    catch(err:any){
        res.status(404).json({
            message: err.message
        });
    }

}  
  