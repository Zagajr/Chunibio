import axios from "axios"

import { Request, Response } from "express";

export async function  registerUser(req : Request , res : Response ){
    try{
        const result = await axios.post('/register', req)
    }
    catch(err:any){
        res.status(200).json({
            message: err.message
        });
    }
    }