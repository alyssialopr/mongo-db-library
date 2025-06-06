import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
  books: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book", // Référence au modèle "Book"
        required: true,
      },
      stock: {
        type: Number,
        default: 0, // Valeur par défaut pour le stock
        min: 0, // Le stock ne peut pas être négatif
      },
    },
  ],
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
});

LibrarySchema.index(
  { name: "text", bio: "text" },
  { weights: { name: 5, bio: 1 } }
);

const Library = mongoose.model("Library", LibrarySchema);

export default Library;