import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 200,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  country : {
    type: String,
    required: false,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  language: {
    type: String,
    required: false,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  loanBook: [
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
