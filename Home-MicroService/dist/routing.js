"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadBookService_1 = require("./Services/uploadBookService");
const router = (0, express_1.Router)();
router.post('/uploadBook', uploadBookService_1.upload.single('file'), uploadBookService_1.uploadBook);
exports.default = router;
