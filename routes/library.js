import express from "express";
import {
  createLibrary,
  getLibraries,
  deleteLibrary,
  getLibraryById,
  statisticsLibraries,
} from "../controllers/libraryController.js";

const router = express.Router();

// Route pour créer une nouvelle bibliothèque
router.post("/", createLibrary);

// Route pour récupérer toutes les bibliothèques
router.get("/", getLibraries);
router.get("/:id", getLibraryById);

// Route pour supprimer une bibliothèque par ID
router.delete("/:id", deleteLibrary);

// Route pour récupérer les statistiques des bibliothèques
router.get("/statistics", statisticsLibraries);

export default router;
