import bodyParser from "body-parser";
import express, { Application } from "express";
import router from "./Routing";
import cookieParser from 'cookie-parser';
import cors from "cors";

const app:Application = express();
app.use(cors({
    origin:"*",
    credentials:true
}));
app.use(bodyParser.json());
app.use('/',router);
app.use(cookieParser());
const port = 4000;

app.listen(port,()=>{
    console.log(`registration_login-microservice is running at ${port}`);
});
