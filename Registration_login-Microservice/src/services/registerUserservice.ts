import { Request, Response } from "express";
import user, { IUser } from "../Models/User.Model";
import Genres from "../Models/Genre.Model";
import {createHash} from "crypto"
export async function registerUser(req: Request , res : Response ){
    try{
        //console.log(req);
        const u = await user.find({email:req.body.email});
        if(u.length==0){
            let password = hash(req.body.password);
            let email:String =req.body.email
            email = email.toLowerCase();
         user.create({
            userName:req.body.userName,
            email : email,
            password:password
        });}
        else{
            throw new Error(`${req.body.email} already has an account`);
        }
        res.status(200).json({
            message:"You have been registered Sucessfully"
        })
    }
    catch(e:any){
        if(e.message === `${req.body.email} already has an account` ){
            res.status(200).json({
                message:e.message
            })
        }
        else{
        res.status(404).json({
            message:e.message
        })}
    }
}

export async function verifyEmail(req :Request, res:Response){
    try{
    const u = await user.find({email:req.params.email});
    if(u.length != 0){
        res.status(200).json({
            message:true
        });
    }
    else{
        res.status(200).json({
            message:false
        });
    }}
    catch(err:any){
        res.status(404).json({
            message:err.message
        })
    }
}

export async function getGenres(req:Request,res:Response) {
    try{
        const genres = await Genres.find({});
        res.status(200).json({
            message:genres
        })
    }
    catch(err:any){
        res.status(404).json({
            message:err.message
        })
    }
}

export async function appFavGenres(req:Request,res:Response) {
    try{
        const selectedGenres = req.body.selectedGenres;
        const u = await user.findOneAndUpdate({email:req.params.emailId},{FavGenre:selectedGenres});
        res.status(200).json({
            message:"favorite genres have been added successfully"
        })
    }
    catch(err:any){
        res.status(404).json({
            message:err.message
        })
    }

}

export function hash(unhashed_password:any){
    return createHash('sha256').update(unhashed_password).digest("hex");
}