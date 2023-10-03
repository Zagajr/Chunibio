import { Router } from "express";
import { appFavGenres, getGenres, registerUser, verifyEmail } from "./services/registerUserservice";
import { loginUser } from "./services/loginUserService";


const router : Router = Router();


router.post('/register',registerUser);
router.get('/verifyEmail/:email',verifyEmail);
router.get('/getGenres',getGenres);
router.post('/addFavGenres/:emailId',appFavGenres);
router.post('/loginUser',loginUser);

export default router; 