import createError from "http-errors";
import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import indexRouter from "./routes/index.js";
import bookRouter from "./routes/books.js"; 
import libraryRouter from "./routes/library.js"; 
import customerRouter from "./routes/customers.js";

dotenv.config();
connectDB();

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Routes
app.use("/", indexRouter);
app.use("/books", bookRouter); // Route pour les livres
app.use("/libraries", libraryRouter); // Route pour les bibliothèques
app.use("/customers", customerRouter); // Route pour les clients

// Gestion des erreurs 404
app.use(function (req, res, next) {
  next(createError(404));
});

export default app;