import { Router } from "express";
import { upload, uploadBook } from "./Services/uploadBookService";
import { getUserFavoriteGenres } from "./Services/genreService";
import { getBookById, getBookToRead } from "./Services/BooksService";

const router:Router = Router();

router.post('/uploadBook',upload.single('file'),uploadBook);
router.get('/getUserFavoriteGenres',getUserFavoriteGenres);
router.get('/getBookById',getBookById);
router.get('/getBookToread',getBookToRead);
export default router;