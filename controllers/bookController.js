import Book from "../models/Book.js";


export const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

export const getBooks = async (req, res) => {
  try {
    const { filter, date, author, price, isbn, genre, edition, resume } = req.query;
    let query = {};

    // Title filter (case-insensitive)
    if (filter) {
      query.name = { $regex: filter, $options: "i" };
    }

    // Additional filters
    if (date) query.date = date;
    if (author) query.author = { $regex: author, $options: "i" };
    if (price) query.price = price;
    if (isbn) query.isbn = isbn;
    if (genre) query.genre = { $regex: genre, $options: "i" };
    if (edition) query.edition = { $regex: edition, $options: "i" };
    if (resume) query.resume = { $regex: resume, $options: "i" };

    const books = await Book.find(query);
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
    res.status(400).json({message: error.message});
  }
};
