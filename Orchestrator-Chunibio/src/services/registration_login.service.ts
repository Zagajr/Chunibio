import axios from "axios"

import { Request, Response } from "express";

export async function  registerUser(req : Request , res : Response ){
    try{
        console.log(req);
        const result = await axios.post('http://localhost:4000/register',req.body);
        res.status(200).json({
            message:result.data.message
        })
    }
    catch(err:any){
        res.status(200).json({
            message: err.message
        });
    }
    }