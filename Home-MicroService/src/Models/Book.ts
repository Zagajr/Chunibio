import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/Chunibio',{});

const book = new mongoose.Schema({
    bookId:{
        type:String,
        require:true,
    },
    title :{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true,
    },
    Desc:{
        type:String,
        require:true
    },
    file:{
        data:Buffer,
        contentType:String,
    }
},{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
}
);
const Book = mongoose.model("Book",book);

export default Book;