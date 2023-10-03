"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/Chunibio', {});
const genre = new mongoose_1.default.Schema({
    _id: {
        type: {},
        require: false
    },
    genre: {
        type: String,
        require: true
    },
    Desc: {
        type: String,
        require: true
    }
});
const Genres = mongoose_1.default.model("Genres", genre);
exports.default = Genres;
