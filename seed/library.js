import Library from "../models/Library.js";
import Book from "../models/Book.js";

const libraries = async () => {
  // Récupération des livres depuis la base de données
  const book1 = await Book.findOne({ name: "Ash Ketchum" });
  const book2 = await Book.findOne({ name: "Misty Waterflower" });
  const book3 = await Book.findOne({ name: "Brock Harrison" });

  return [
    {
      books: [book1?._id, book2?._id], // Ajout de l'ID du livre "Red"
      name: "Library of Kanto",
    },
    {
      books: [book3?._id], // Ajout de l'ID du livre "Blue"
      name: "Library of Johto",
    },
    {
      books: [book2?._id], // Ajout de l'ID du livre "Misty"
      name: "Library of Hoenn",
    },
    {
      books: [book1?._id], // Ajout de l'ID du livre "Brock"
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