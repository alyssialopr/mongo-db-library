import mongoose from "mongoose";

const BibliothequeSchema = new mongoose.Schema({
  livre : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Livre",
    required: true,
  },
  nom : {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
});

BibliothequeSchema.index(
  { name: "text", bio: "text" },
  { weights: { name: 5, bio: 1 } }
);

const Bibliotheque = mongoose.model("Bibliotheque", BibliothequeSchema);

export default Bibliotheque;
