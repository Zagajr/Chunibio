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
exports.registerUser = registerUser;
exports.verifyEmail = verifyEmail;
exports.getGenres = getGenres;
exports.addFavGenres = addFavGenres;
exports.loginUser = loginUser;
const axios_1 = __importDefault(require("axios"));
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //console.log(req);
            const result = yield axios_1.default.post('http://localhost:4000/register', req.body);
            res.status(200).json({
                message: result.data.message
            });
        }
        catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    });
}
function verifyEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios_1.default.get(`http://localhost:4000/verifyEmail/${req.params.email}`);
            res.status(200).json({
                message: result.data.message
            });
        }
        catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    });
}
function getGenres(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios_1.default.get('http://localhost:4000/getGenres');
            res.status(200).json({
                message: result.data.message
            });
        }
        catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    });
}
function addFavGenres(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios_1.default.post(`http://localhost:4000/addFavGenres/${req.params.emailId}`, req.body);
            res.status(200).json({
                message: result.data.message
            });
        }
        catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    });
}
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios_1.default.post("http://localhost:4000/loginUser", req.body);
            res.cookie('creds', req.body.userName, { expires: new Date(), maxAge: 999999 });
            res.cookie('email', result.data.email, { expires: new Date(), maxAge: 999999 });
            res.status(200).json({
                response: result.data
            });
        }
        catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    });
}
