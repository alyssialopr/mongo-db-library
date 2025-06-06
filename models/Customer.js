import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 200,
  },
  firstname: {
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
  country: {
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

CustomerSchema.methods.plus10LoanBooks = function () {
  return this.loanBook.length >= 10;
}

CustomerSchema.methods.age = function () {
  const today = new Date();
  const birthDate = new Date(this.birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  
  return age;
}

CustomerSchema.methods.isAdult = function () {
  const age = this.age();
  return age >= 18;
}

CustomerSchema.index(
  { lastname: "text", firstname: "text", mail: "text" },
  { weights: { lastname: 5, firstname: 3, mail: 1 } }
);

CustomerSchema.index(
  { mail: 1 }, 
  { unique: true }
);

CustomerSchema.index(
  { country: 1 }
);

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
