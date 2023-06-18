import { Request, Response } from "express";
import user, { IUser } from "../Models/User.Model";
export async function registerUser(req: Request , res : Response ){
    try{
        console.log(req);
        await user.create({
            userName:req.body.userName,
            email:req.body.email,
            password:req.body.password
        });
        res.status(200).json({
            message:"You have been registered Sucessfully"
        })
    }
    catch(e:any){
        res.status(404).json({
            message:e.message
        })
    }
}