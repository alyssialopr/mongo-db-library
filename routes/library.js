import express from "express";
import {
  createLibrary,
  updateLibrary,
  getLibraries,
  deleteLibrary,
  getLibraryById,
  statisticsLibraries,
} from "../controllers/libraryController.js";

const router = express.Router();

router.post("/", createLibrary);

router.put("/:id", updateLibrary);

router.get("/", getLibraries);

router.get("/statistics", statisticsLibraries);

router.get("/:id", getLibraryById);

router.delete("/:id", deleteLibrary);

export default router;
