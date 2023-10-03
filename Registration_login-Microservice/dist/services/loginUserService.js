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
exports.loginUser = void 0;
const User_Model_1 = __importDefault(require("../Models/User.Model"));
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //   console.log("reached loginUser");
        try {
            const u = yield User_Model_1.default.findOne({ $and: [{ userName: req.body.userName }, { password: req.body.passWord }] });
            // console.log(u);
            if (u) {
                res.status(200).json({
                    message: "logged in successfully",
                });
            }
            else {
                res.status(401).json({
                    message: "username or password is incorrect"
                });
            }
        }
        catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    });
}
exports.loginUser = loginUser;
