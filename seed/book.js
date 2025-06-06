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
  {
    author: "Erika Green",
    price: 120,
    date: new Date("2023-04-01"),
    isbn: "2233445566778",
    name: "Erika",
    genre: "Nature",
    edition: "Second Edition",
    resume: "A Grass-type Gym Leader from Celadon City.",
  },
  {
    author: "Sabrina Psychic",
    price: 180,
    date: new Date("2023-05-01"),
    isbn: "3344556677889",
    name: "Sabrina",
    genre: "Mystery",
    edition: "First Edition",
    resume: "A Psychic-type Gym Leader from Saffron City.",
  },
  {
    author: "Lt. Surge",
    price: 140,
    date: new Date("2023-06-01"),
    isbn: "4455667788990",
    name: "Lt. Surge",
    genre: "Action",
    edition: "Collector's Edition",
    resume: "An Electric-type Gym Leader from Vermilion City.",
  },
  {
    author: "Koga Ninja",
    price: 160,
    date: new Date("2023-07-01"),
    isbn: "5566778899001",
    name: "Koga",
    genre: "Stealth",
    edition: "First Edition",
    resume: "A Poison-type Gym Leader from Fuchsia City.",
  },
  {
    author: "Blaine Hot",
    price: 210,
    date: new Date("2023-08-01"),
    isbn: "6677889900112",
    name: "Blaine",
    genre: "Science",
    edition: "Special Edition",
    resume: "A Fire-type Gym Leader from Cinnabar Island.",
  },
  {
    author: "Giovanni Boss",
    price: 250,
    date: new Date("2023-09-01"),
    isbn: "7788990011223",
    name: "Giovanni",
    genre: "Crime",
    edition: "First Edition",
    resume: "A Ground-type Gym Leader and Team Rocket boss.",
  },
  {
    author: "Lorelei Ice",
    price: 170,
    date: new Date("2023-10-01"),
    isbn: "8899001122334",
    name: "Lorelei",
    genre: "Fantasy",
    edition: "First Edition",
    resume: "An Ice-type Elite Four member.",
  },
  {
    author: "Bruno Power",
    price: 190,
    date: new Date("2023-11-01"),
    isbn: "9900112233445",
    name: "Bruno",
    genre: "Martial Arts",
    edition: "Second Edition",
    resume: "A Fighting-type Elite Four member.",
  },
  {
    author: "Agatha Ghost",
    price: 160,
    date: new Date("2023-12-01"),
    isbn: "1011121314151",
    name: "Agatha",
    genre: "Horror",
    edition: "First Edition",
    resume: "A Ghost-type Elite Four member.",
  },
  {
    author: "Lance Dragon",
    price: 220,
    date: new Date("2024-01-01"),
    isbn: "1213141516171",
    name: "Lance",
    genre: "Fantasy",
    edition: "Collector's Edition",
    resume: "A Dragon-type Elite Four member and Champion.",
  },
  {
    author: "Tracey Sketchit",
    price: 10,
    date: new Date("2024-02-01"),
    isbn: "1314151617181",
    name: "Tracey Sketchit",
    genre: "Art",
    edition: "First Edition",
    resume: "A Pokémon watcher and sketch artist.",
  },
  {
    author: "Professor Oak",
    price: 300,
    date: new Date("2024-03-01"),
    isbn: "1415161718191",
    name: "Professor Oak",
    genre: "Science",
    edition: "Anniversary Edition",
    resume: "A renowned Pokémon Professor from Pallet Town.",
  },
];

const seedBooks = async () => {
  await Book.deleteMany({});
  await Book.insertMany(books);
};

export default seedBooks;
