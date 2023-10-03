import { Request, Response } from "express";
import user,{IUser} from "../Models/User.Model";
import { hash } from "./registerUserservice";

export async function loginUser(req: Request,res :Response){
 //   console.log("reached loginUser");
   try{ 
    const password = hash(req.body.passWord);
    const u :IUser|null = await user.findOne({$and:[{userName:req.body.userName},{password:password}]});
  // console.log(u);
    if(u){
        res.status(200).json({
            message: "logged in successfully",
            email:u.email
        })
    }
    else{
        res.status(401).json({
            message: "username or password is incorrect"
        })
    }
    }
    catch(err : any){
        res.status(400).json({
            message:err.message
        })
    }
} 