import Book from "../models/Book.js";

export const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.json({ data: books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBooks = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// export const searchBooks = async (req, res) => {
//   try {
//     const { title, author } = req.query;
//     const query = {};

//     if (title) {
//       query.title = new RegExp(title, "i");
//     }

//     if (author) {
//       query.author = new RegExp(author, "i");
//     }

//     const books = await Book.find(query);
//     if (books.length === 0) {
//       return res.status(404).json({ message: "No books found" });
//     }

//     res.json({ data: books });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
