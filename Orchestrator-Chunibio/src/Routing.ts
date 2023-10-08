import { Router } from "express";
import { addFavGenres, getGenres, loginUser, registerUser, verifyEmail } from "./services/registration_login.service";
import { getBookById, getBookToRead, getUserFavoriteGenres, uploadBook } from "./services/homeFeatures.service";
import multer from "multer";

export const router :Router = Router();
const storage = multer.memoryStorage();
const upload = multer({storage});

router.post('/register',registerUser);
router.get('/verifyEmail/:email',verifyEmail);
router.get('/getGenres',getGenres);
router.post('/addFavGenres/:emailId',addFavGenres);
router.post('/loginUser',loginUser);
// Home MicroService
router.post('/uploadBook',upload.single('file'),uploadBook);
router.get('/getUserFavoriteGenres',getUserFavoriteGenres)
router.get('/getBookById',getBookById);
router.get('/getBookToread',getBookToRead);
export default router;