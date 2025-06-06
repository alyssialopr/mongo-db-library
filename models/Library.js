import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
  books: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book", 
        required: true,
      },
      stock: {
        type: Number,
        default: 0,
        min: 0, 
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
  { name: 1 },
  { unique: true }
);

LibrarySchema.index(
  { "books.book": 1 }
);

LibrarySchema.index(
  { "books.stock": 1 },
  { partialFilterExpression: { "books.stock": { $gt: 0 } } }
);

const Library = mongoose.model("Library", LibrarySchema);

export default Library;