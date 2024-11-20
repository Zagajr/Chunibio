import { Request, Response } from "express";
import multer from "multer";
import Book from "../Models/Book";

// Configure multer to use memory storage and set size limits
const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Set file size limit to 10 MB (adjust as needed)
    fieldSize: 10 * 1024 * 1024 // Set field size limit to 10 MB (adjust as needed)
  }
});

export async function uploadBook(req: Request, res: Response) {
  try {
    // Check if the file exists
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Get the file from the request
    const file = req.file;

    // Destructure title, genre, and description from req.body
    const { title, genre, Desc } = req.body;

    // Validate that all required fields are present
    if (!title || !genre || !Desc) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if the file size exceeds the limit
    if (file.size > 10 * 1024 * 1024) { // 10 MB limit
      return res.status(400).json({ message: 'File size exceeds limit of 10 MB' });
    }

    // Generate a new book ID
    const id = await getBookId();

    // Create a new Book instance
    const book = new Book({
      bookId: id,
      title,
      genre,
      Desc,
      file: {
        data: file.buffer,
        contentType: file.mimetype,
      },
    });

    // Save the book to the database
    await book.save();

    // Respond with a success message
    res.status(200).json({
      message: "File uploaded successfully",
    });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({
      message: "Failed to upload file",
      error: error.message,
    });
  }
}

// Function to generate a new book ID
async function getBookId(): Promise<string> {
  try {
    // Count the total number of books
    let books = await Book.countDocuments({}); // Use countDocuments instead of count for MongoDB
    books++;
    
    // Generate the book ID
    let id: string = "b" + books;
    return id;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
