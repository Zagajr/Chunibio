import { Router } from "express";
import { addFavGenres, getGenres, registerUser, verifyEmail } from "./services/registration_login.service";

export const router :Router = Router();

router.post('/register',registerUser);
router.get('/verifyEmail/:email',verifyEmail);
router.get('/getGenres',getGenres);
router.post('/addFavGenres/:emailId',addFavGenres);

export default router;