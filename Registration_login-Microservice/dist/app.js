"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const Routing_1 = __importDefault(require("./Routing"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/', Routing_1.default);
const port = 4000;
app.listen(port, () => {
    console.log(`registration_login-microservice is running at ${port}`);
});
