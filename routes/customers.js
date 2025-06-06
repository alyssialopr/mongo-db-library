import express from "express";
import { createCustomer, getCustomers, deleteCustomer, loanBookToCustomer } from "../controllers/customerController.js";

const router = express.Router();

router.post("/", createCustomer);

router.get("/", getCustomers);

router.post('/loans/:id', loanBookToCustomer);

router.delete("/:id", deleteCustomer);

export default router;