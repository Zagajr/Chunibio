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
exports.appFavGenres = exports.getGenres = exports.verifyEmail = exports.registerUser = void 0;
const User_Model_1 = __importDefault(require("../Models/User.Model"));
const Genre_Model_1 = __importDefault(require("../Models/Genre.Model"));
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //console.log(req);
            const u = yield User_Model_1.default.find({ email: req.body.email });
            if (u.length == 0) {
                User_Model_1.default.create({
                    userName: req.body.userName,
                    email: req.body.email,
                    password: req.body.password
                });
            }
            else {
                throw new Error(`${req.body.email} already has an account`);
            }
            res.status(200).json({
                message: "You have been registered Sucessfully"
            });
        }
        catch (e) {
            if (e.message === `${req.body.email} already has an account`) {
                res.status(200).json({
                    message: e.message
                });
            }
            else {
                res.status(404).json({
                    message: e.message
                });
            }
        }
    });
}
exports.registerUser = registerUser;
function verifyEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const u = yield User_Model_1.default.find({ email: req.params.email });
            if (u.length != 0) {
                res.status(200).json({
                    message: true
                });
            }
            else {
                res.status(200).json({
                    message: false
                });
            }
        }
        catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    });
}
exports.verifyEmail = verifyEmail;
function getGenres(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const genres = yield Genre_Model_1.default.find({});
            res.status(200).json({
                message: genres
            });
        }
        catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    });
}
exports.getGenres = getGenres;
function appFavGenres(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const selectedGenres = req.body.selectedGenres;
            const u = yield User_Model_1.default.findOneAndUpdate({ email: req.params.emailId }, { FavGenre: selectedGenres });
            res.status(200).json({
                message: "favorite genres have been added successfully"
            });
        }
        catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    });
}
exports.appFavGenres = appFavGenres;
