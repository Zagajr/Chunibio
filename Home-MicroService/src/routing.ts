import { Router } from "express";
import { upload, uploadBook } from "./Services/uploadBookService";

const router:Router = Router();

router.post('/uploadBook',upload.single('file'),uploadBook);

export default router;