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
      name: "A passionate Pokémon trainer aiming to become a Pokémon Master.",
    },
    {
      books: [book3?._id], // Ajout de l'ID du livre "Blue"
      name: "A confident rival and expert Pokémon trainer.",
    },
    {
      books: [book2?._id], // Ajout de l'ID du livre "Misty"
      name: "Gym leader specializing in Water-type Pokémon.",
    },
    {
      books: [book1?._id], // Ajout de l'ID du livre "Brock"
      name: "Gym leader who is a rock-solid trainer with strong Pokémon.",
    },
  ];
};

const seedLibraries = async () => {
  const libraryData = await libraries();
  await Library.deleteMany({});
  await Library.insertMany(libraryData);
};

export default seedLibraries;