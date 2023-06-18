import express from "express";
import {router} from "./Routing"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use('/',router);
const port = 3000;
app.listen(port,()=>{
    console.log(`Orchestrator is running ${port}`);
})