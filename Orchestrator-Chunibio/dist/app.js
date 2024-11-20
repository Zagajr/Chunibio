"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routing_1 = require("./Routing");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
const corsOptions = {
    origin: 'http://localhost:4200', // Specify the origin explicitly
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
};
app.use((0, cors_1.default)(corsOptions));
app.use('/', Routing_1.router);
const port = 3000;
app.listen(port, () => {
    console.log(`Orchestrator is running ${port}`);
});
