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

export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const fields = {
      name: (val) => ({ name: { $regex: val, $options: "i" } }),
      date: (val) => ({ date: val }),
      author: (val) => ({ author: { $regex: val, $options: "i" } }),
      price: (val) => ({ price: val }),
      isbn: (val) => ({ isbn: val }),
      genre: (val) => ({ genre: { $regex: val, $options: "i" } }),
      edition: (val) => ({ edition: { $regex: val, $options: "i" } }),
      resume: (val) => ({ resume: { $regex: val, $options: "i" } }),
    };

    const query = Object.entries(fields).reduce((acc, [key, fn]) => {
      const value = req.query[key];
      if (value) Object.assign(acc, fn(value));
      return acc;
    }, {});

    const books = await Book.find(query);

    const booksWithMethodes = books.map((book) => ({
      ...book.toObject(),
      isExpensive: book.isExpensive(),
      
    }));

    res.json({ data: booksWithMethodes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
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

export const searchBooks = async (req, res) => {
  const { query } = req.query;

  try {
    const books = await Book.find({ $text: { $search: query } })
      .sort({ score: { $meta: "textScore" } })
      .select({ score: { $meta: "textScore" } });

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const statisticsBooks = async (req, res) => {
  try {
    const stats = await Book.aggregate([
      {
        $group: {
          _id: "$genre",
          totalBooks: { $sum: 1 },
          averagePrice: { $avg: "$price" },
        },
      },
      {
        $project: {
          genre: "$_id",
          totalBooks: 1,
          averagePrice: 1,
        },
      },
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
