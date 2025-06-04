import express from "express";
import { createLibrary, getLibraries, deleteLibrary } from "../controllers/libraryController.js";

const router = express.Router();

// Route pour créer une nouvelle bibliothèque
router.post("/", createLibrary);

// Route pour récupérer toutes les bibliothèques
router.get("/", getLibraries);

// Route pour supprimer une bibliothèque par ID
router.delete("/:id", deleteLibrary);

export default router;