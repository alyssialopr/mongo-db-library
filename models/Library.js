import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book", // Correction : référence au modèle "Book"
      required: true,
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