import { Router } from "express";
import { appFavGenres, getGenres, registerUser, verifyEmail } from "./services/registerUserservice";


const router : Router = Router();


router.post('/register',registerUser);
router.get('/verifyEmail/:email',verifyEmail);
router.get('/getGenres',getGenres);
router.post('/addFavGenres/:emailId',appFavGenres);

export default router;