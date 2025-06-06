import Book from "../models/Book.js";

const books = [
  {
    author: "John Doe",
    price: 100,
    date: new Date("2023-01-01"),
    isbn: "1234567890123",
    name: "Ash Ketchum",
    genre: "Adventure",
    edition: "First Edition",
    resume: "A young Pokémon trainer from Pallet Town.",
  },
  {
    author: "Jane Smith",
    price: 150,
    date: new Date("2023-02-01"),
    isbn: "9876543210123",
    name: "Misty Waterflower",
    genre: "Adventure",
    edition: "First Edition",
    resume: "A Water-type Pokémon trainer and Gym Leader from Cerulean City.",
  },
  {
    author: "Ash Ketchum",
    price: 200,
    date: new Date("2023-03-01"),
    isbn: "1122334455667",
    name: "Brock Harrison",
    genre: "Adventure",
    edition: "First Edition",
    resume: "A Rock-type Pokémon trainer and Gym Leader from Pewter City.",
  },
];

const seedBooks = async () => {
  await Book.deleteMany({});
  await Book.insertMany(books);
};

export default seedBooks;
