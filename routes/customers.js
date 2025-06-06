import express from "express";
import { createCustomer, updateCustomer, getCustomers, deleteCustomer, loanBookToCustomer } from "../controllers/customerController.js";

const router = express.Router();

router.post("/", createCustomer);

router.put("/:id", updateCustomer);

router.get("/", getCustomers);

router.post('/loans/:id', loanBookToCustomer);

router.delete("/:id", deleteCustomer);

export default router;