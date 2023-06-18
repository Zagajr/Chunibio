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
exports.registerUser = void 0;
const User_Model_1 = __importDefault(require("../Models/User.Model"));
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield User_Model_1.default.create({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            });
            res.status(200).json({
                message: "You have been registered Sucessfully"
            });
        }
        catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    });
}
exports.registerUser = registerUser;