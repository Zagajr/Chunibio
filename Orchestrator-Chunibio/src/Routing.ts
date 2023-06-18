import { Router } from "express";
import { registerUser } from "./services/registration_login.service";

export const router :Router = Router();

router.post('/register',registerUser)

export default router;