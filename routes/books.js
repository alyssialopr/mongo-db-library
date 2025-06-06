import express from "express";
import {
  createBook,
  getBooks,
  deleteBooks,
  statisticsBooks,
  getBookById
} from "../controllers/bookController.js";

const router = express.Router();

// Route pour créer un livre
router.post("/", createBook);

// Route pour récupérer les livres
router.get("/", getBooks);

// Route pour supprimer un livre par ID
router.delete("/:id", deleteBooks);

// Route pour récupérer un livre par ID
router.get("/:id", getBookById);

// Route pour récupérer les statistiques des livres
router.get("/statistics", statisticsBooks); 

export default router;
