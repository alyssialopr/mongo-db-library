import express from "express";
import {
  createBook,
  getBooks,
  deleteBooks,
  searchBooks,
  getBookById,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);

router.get("/search", searchBooks);

router.get("/", getBooks);

router.delete("/:id", deleteBooks);

router.get("/:id", getBookById);

export default router;
