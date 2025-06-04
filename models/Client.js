import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 200,
  },
  nom: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  prenom: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  dateNaissance: {
    type: Date,
    required: true,
  },
  pays : {
    type: String,
    required: false,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  langue: {
    type: String,
    required: false,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  livresEmpruntes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Livre",
    },
  ],
});

ClientSchema.index(
  { name: "text", bio: "text" },
  { weights: { name: 5, bio: 1 } }
);

const Client = mongoose.model("Client", LivreSchema);

export default Client;
