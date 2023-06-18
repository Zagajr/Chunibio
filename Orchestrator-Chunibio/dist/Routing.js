"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const registration_login_service_1 = require("./services/registration_login.service");
exports.router = (0, express_1.Router)();
exports.router.post('/register', registration_login_service_1.registerUser);
exports.default = exports.router;
