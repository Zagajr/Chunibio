import express from "express";
import {router} from "./Routing"
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
const corsOptions = {
    origin: 'http://localhost:4200', // Specify the origin explicitly
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
  };
app.use(cors(corsOptions));
app.use('/',router);
const port = 3000;
app.listen(port,()=>{
    console.log(`Orchestrator is running ${port}`);
})