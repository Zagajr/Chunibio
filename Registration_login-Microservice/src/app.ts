import bodyParser from "body-parser";
import express from "express";
import router from "./Routing";

const app = express();
app.use(bodyParser.json());
app.use('/',router);

const port = 4000;

app.listen(port,()=>{
    console.log(`registration_login-microservice is running at ${port}`);
});
