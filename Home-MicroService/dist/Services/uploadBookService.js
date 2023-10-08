"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadBook = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const Book_1 = __importDefault(require("../Models/Book"));
const storage = multer_1.default.memoryStorage();
exports.upload = (0, multer_1.default)({ storage });
function uploadBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.body.file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            const { title, genre, Desc } = req.body;
            const id = yield getbookId();
            const book = new Book_1.default({
                bookId: id,
                title,
                genre,
                Desc,
                file: {
                    data: req.body.file.buffer,
                    contentType: req.body.file.mimetype
                },
            });
            yield book.save();
            res.status(200).json({
                message: "file Uploaded sucessfully"
            });
        }
        catch (error) {
            res.status(500).json({
                message: "failed to upload file",
                error: error.message
            });
        }
    });
}
exports.uploadBook = uploadBook;
function getbookId() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let books = yield Book_1.default.count({});
            books++;
            let id = "b" + books;
            return id;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
