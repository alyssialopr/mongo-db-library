import Library from "../models/Library.js";
import Book from "../models/Book.js";

const libraries = async () => {
  // Récupération des livres depuis la base de données
  const book1 = await Book.findOne({ name: "Ash Ketchum" });
  const book2 = await Book.findOne({ name: "Misty Waterflower" });
  const book3 = await Book.findOne({ name: "Brock Harrison" });

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
  ];
};

const seedLibraries = async () => {
  const libraryData = await libraries();
  await Library.deleteMany({});
  await Library.insertMany(libraryData);
};

export default seedLibraries;