"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerUserservice_1 = require("./services/registerUserservice");
const router = (0, express_1.Router)();
router.post('/register', registerUserservice_1.registerUser);
exports.default = router;
