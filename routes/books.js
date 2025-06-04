import express from "express";
import { createBook, getBook, deleteTrainer } from "../controllers/BookController.js";

const router = express.Router();

// Route pour créer un livre
router.post("/", createBook);

// Route pour récupérer les livres
router.get("/", getBook);

// Route pour supprimer un livre par ID
router.delete("/:id", deleteTrainer);

export default router;