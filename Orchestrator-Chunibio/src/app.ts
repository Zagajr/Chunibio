import express from "express";
import {router} from "./Routing"
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use('/',router);
const port = 3000;
app.listen(port,()=>{
    console.log(`Orchestrator is running ${port}`);
})