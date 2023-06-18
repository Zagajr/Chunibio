import { Router } from "express";
import { registerUser } from "./services/registerUserservice";


const router : Router = Router();


router.post('/register',registerUser);

export default router;