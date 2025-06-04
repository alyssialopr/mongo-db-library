import express from "express";
import { createCustomer, getCustomers, deleteCustomer } from "../controllers/customerController.js";

const router = express.Router();

// Route pour créer un client
router.post("/", createCustomer);

// Route pour récupérer tous les clients
router.get("/", getCustomers);

// Route pour supprimer un client par ID
router.delete("/:id", deleteCustomer);

export default router;