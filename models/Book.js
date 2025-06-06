import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 1000
    },
    date : {
        type: Date,
        required: true,
    },
    isbn : {
        type: String,
        required: false,
        trim: true,
        unique: true,
        minlength: 10,
        maxlength: 13
    },
    name : {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    genre : {
        type: String,
        required: false,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    edition : {
        type: String,
        required: false,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    resume : {
        type: String,
        required: false,
        minlength: 10,
        maxlength: 1000
    }
})

BookSchema.index(
  { name: "text", bio: "text" },
  { weights: { name: 5, bio: 1 } }
);


const Book = mongoose.model("Book", BookSchema);

export default Book;