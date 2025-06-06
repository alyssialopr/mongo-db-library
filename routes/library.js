import express from "express";
import {
  createLibrary,
  getLibraries,
  deleteLibrary,
  getLibraryById,
  statisticsLibraries,
} from "../controllers/libraryController.js";

const router = express.Router();

router.post("/", createLibrary);

router.get("/", getLibraries);

router.get("/statistics", statisticsLibraries);

router.get("/:id", getLibraryById);

router.delete("/:id", deleteLibrary);


export default router;
