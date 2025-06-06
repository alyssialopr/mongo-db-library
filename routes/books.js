import express from "express";
import {
  createBook,
  updateBook,
  getBooks,
  deleteBooks,
  searchBooks,
  getBookById,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);

router.put("/:id", updateBook);

router.get("/search", searchBooks);

router.get("/", getBooks);

router.delete("/:id", deleteBooks);

router.get("/:id", getBookById);

export default router;
