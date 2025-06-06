import Library from "../models/Library.js";

export const createLibrary = async (req, res) => {
  const { books, name, stock } = req.body;

  try {
    const newLibrary = new Library({
      books,
      name,
      stock: Array.isArray(books) ? Array(books.length).fill(0) : [], // Initialiser le stock à 0 pour chaque livre
    });

    await newLibrary.save();
    res.status(201).json(newLibrary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLibraries = async (req, res) => {
  const { search } = req.query;
  try {
    const filter = search ? { $text: { $search: search } } : {};

    const libraries = await Library.find(filter).populate("books.book");
    res.json(libraries);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLibraryById = async (req, res) => {
  const { id } = req.params;

  try {
    const library = await Library.findById(id).populate("books.book");
    if (!library) return res.status(404).json({ message: "Library not found" });

    res.json(library);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteLibrary = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLibrary = await Library.findByIdAndDelete(id);
    if (!deletedLibrary) return res.status(404).json({ message: "Library not found" });

    res.json({ message: "Library successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const statisticsLibraries = async (req, res) => {
  try {
    const stats = await Library.aggregate([
      { $unwind: "$books" },

      {
        $lookup: {
          from: "books",
          localField: "books.book",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      { $unwind: "$bookDetails" },

      {
        $group: {
          _id: {
            libraryId: "$_id",
            libraryName: "$name",
            bookId: "$books.book",
            bookTitle: "$bookDetails.name",
          },
          stock: { $sum: "$books.stock" },
          price: { $first: "$bookDetails.price" },
        },
      },

      {
        $group: {
          _id: {
            libraryId: "$_id.libraryId",
            libraryName: "$_id.libraryName",
          },
          books: {
            $push: {
              bookId: "$_id.bookId",
              title: "$_id.bookTitle",
              stock: "$stock",
              price: "$price",
            },
          },
          bookTitles: { $addToSet: "$_id.bookTitle" },
          avgPrice: { $avg: "$price" },
        },
      },

      {
        $project: {
          _id: 0,
          libraryId: "$_id.libraryId",
          libraryName: "$_id.libraryName",
          booksCount: { $size: "$bookTitles" },
          bookTitles: 1,
          avgPrice: { $round: ["$avgPrice", 2] },
          books: 1,
        },
      },
    ]);

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
