import Library from "../models/Library.js";
import Book from "../models/Book.js";

const libraries = async () => {
  // Récupération de tous les livres depuis la base de données
  const allBooks = await Book.find({});
  const book1 = await Book.findOne({ name: "Ash Ketchum" });
  const book2 = await Book.findOne({ name: "Misty Waterflower" });
  const book3 = await Book.findOne({ name: "Brock Harrison" });

  // Helper pour générer une liste de livres avec stock aléatoire
  const booksWithStock = (books) =>
    books.map((book) => ({
      book: book._id,
      stock: Math.floor(Math.random() * 50) + 1,
    }));

  // Shuffle array helper
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  // Split books into two non-overlapping sets for Hoenn and Sinnoh
  const shuffledBooks = shuffle([...allBooks]);
  const mid = Math.ceil(shuffledBooks.length / 2);
  const hoennBooks = shuffledBooks.slice(0, mid);
  const sinnohBooks = shuffledBooks.slice(mid);

  return [
    {
      books: [
        { book: book1?._id, stock: 10 },
        { book: book2?._id, stock: 5 },
      ],
      name: "Library of Kanto",
    },
    {
      books: [
        { book: book1?._id, stock: 1850 },
        { book: book3?._id, stock: 885 },
      ],
      name: "Library of Johto",
    },
    {
      books: booksWithStock(hoennBooks),
      name: "Library of Hoenn",
    },
    {
      books: booksWithStock(sinnohBooks),
      name: "Library of Sinnoh",
    },
  ];
};

const seedLibraries = async () => {
  const libraryData = await libraries();
  await Library.deleteMany({});
  await Library.insertMany(libraryData);
};

export default seedLibraries;