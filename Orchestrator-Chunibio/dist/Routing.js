"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const registration_login_service_1 = require("./services/registration_login.service");
const homeFeatures_service_1 = require("./services/homeFeatures.service");
const multer_1 = __importDefault(require("multer"));
exports.router = (0, express_1.Router)();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
exports.router.post('/register', registration_login_service_1.registerUser);
exports.router.get('/verifyEmail/:email', registration_login_service_1.verifyEmail);
exports.router.get('/getGenres', registration_login_service_1.getGenres);
exports.router.post('/addFavGenres/:emailId', registration_login_service_1.addFavGenres);
exports.router.post('/loginUser', registration_login_service_1.loginUser);
// Home MicroService
exports.router.post('/uploadBook', upload.single('file'), homeFeatures_service_1.uploadBook);
exports.router.get('/getUserFavoriteGenres', homeFeatures_service_1.getUserFavoriteGenres);
exports.router.get('/getBookById', homeFeatures_service_1.getBookById);
exports.router.get('/getBookToread', homeFeatures_service_1.getBookToRead);
exports.default = exports.router;
