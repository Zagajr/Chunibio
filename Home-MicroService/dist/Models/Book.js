"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/Chunibio', {});
const book = new mongoose_1.default.Schema({
    bookId: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true,
    },
    Desc: {
        type: String,
        require: true
    },
    file: {
        data: Buffer,
        contentType: String,
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
});
const Book = mongoose_1.default.model("Book", book);
exports.default = Book;
