import express, { Application } from "express";
import bodyParser from "body-parser";
import router from "./routing";
import cors from "cors";

const app:Application = express();
app.use(cors({
    origin:"*",
    credentials:true
}));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use('/',router);
const port = 5000;
app.listen(port,()=>{
    console.log(`Home-MicroService is running at ${port}`);
});