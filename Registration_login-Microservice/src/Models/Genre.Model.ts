import mongoose, { Document, Model } from "mongoose";

mongoose.connect('mongodb://localhost:27017/Chunibio',{});

export interface Igenre extends Document{
    _id:{},
    genre:String,
    Desc:String,
}

const genre = new mongoose.Schema({
    _id:{
        type:{},
        require:false
    },
    genre:{
        type:String,
        require:true
    },
    Desc:{
        type:String,
        require:true
    }
});

const Genres =  mongoose.model("Genres",genre);

export default Genres;