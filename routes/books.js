import express from "express";
import { createBook, getBooks, deleteTrainer } from "../controllers/bookController.js";

const router = express.Router();

// Route pour créer un livre
router.post("/", createBook);

// Route pour récupérer les livres
router.get("/", getBooks);

// Route pour supprimer un livre par ID
router.delete("/:id", deleteTrainer);

export default router;