import Library from "../models/Library.js";

const libraries = [
  {
    books: "Red",
    name: "A passionate Pokémon trainer aiming to become a Pokémon Master.",
  },
  {
    books: "Blue",
    name: "A confident rival and expert Pokémon trainer.",
  },
  {
    books: "Misty",
    name: "Gym leader specializing in Water-type Pokémon.",
  },
  {
    books: "Brock",
    name: "Gym leader who is a rock-solid trainer with strong Pokémon.",
  },
];

const seedLibraries = async () => {
  await Library.deleteMany({});
  await Library.insertMany(libraries);
};

export default seedLibraries;
