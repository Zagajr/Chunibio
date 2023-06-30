import { Request, Response } from "express";
import user, { IUser } from "../Models/User.Model";
export async function registerUser(req: Request , res : Response ){
    try{
        //console.log(req);
        const u = await user.find({email:req.body.email});
        if(u.length==0){
         user.create({
            userName:req.body.userName,
            email:req.body.email,
            password:req.body.password
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