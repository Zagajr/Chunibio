import mongoose, { Document, Model } from "mongoose";

mongoose.connect('mongodb://localhost:27017/Chunibio',{});

export interface IUser extends Document{
    userName:String,
    email:String,
    password:String
}

const User = new mongoose.Schema({
    userName :{
        type:String,
        require :true
    },
    email : {
        type:String,
        require:true
    },
    FavGenre:{
        type:Array,
        require:false
    },
    password :{
        type:String,
        require:true
    }
},{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
}
);

const user : Model<IUser> =  mongoose.model<IUser>("User",User)

export default user;

