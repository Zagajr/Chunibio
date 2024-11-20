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
exports.uploadBook = uploadBook;
exports.getUserFavoriteGenres = getUserFavoriteGenres;
exports.getBookById = getBookById;
exports.getBookToRead = getBookToRead;
const axios_1 = __importDefault(require("axios"));
function uploadBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reqBody = req.body;
            const fileBuffer = JSON.stringify(req.file);
            const requestToHomeMicroServive = new FormData();
            requestToHomeMicroServive.append('title', reqBody.title);
            requestToHomeMicroServive.append('genre', reqBody.genre);
            requestToHomeMicroServive.append('Desc', reqBody.Desc);
            requestToHomeMicroServive.append('file', fileBuffer);
            const resp = yield axios_1.default.post('http://localhost:5000/uploadBook', requestToHomeMicroServive);
            res.status(200).json({
                message: resp.data.message
            });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    });
}
function getUserFavoriteGenres(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const FavGenresResponse = yield axios_1.default.get(`http://localhost:5000/getUserFavoriteGenres?email=${req.query.email}`);
            res.status(200).json({
                favoriteGeners: FavGenresResponse.data.userSFavoriteBoooks
            });
        }
        catch (error) {
            res.status(200).json({
                message: error.message
            });
        }
    });
}
function getBookById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookresponse = yield axios_1.default.get(`http://localhost:5000/getBookById?id=${req.query.id}`);
            res.status(200).json({
                book: bookresponse.data.booK
            });
        }
        catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    });
}
function getBookToRead(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const BookPDFresponse = yield axios_1.default.get(`http://localhost:5000/getBookToread?bookId=${req.query.bookId}`);
            if (BookPDFresponse) {
                res.status(200).json({
                    bookPDF: BookPDFresponse.data.bookPDF
                });
            }
            else {
                res.status(404).json({
                    message: "can't find Book"
                });
            }
        }
        catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    });
}
