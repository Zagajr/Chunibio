import express from "express";
import {router} from "./Routing"

const app = express();

app.use('/',router);
const port = 3000;
app.listen(port,()=>{
    console.log(`Orchestrator is running ${port}`);
})