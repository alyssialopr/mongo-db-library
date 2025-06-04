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

export const getBook = async (req, res) => {
  // const { search, populate, limit: queryLimit, page: queryPage } = req.query;
  // const limit = parseInt(queryLimit) || 10;
  // const page = parseInt(queryPage) || 1;
  // const skip = (page - 1) * limit;
 try {
   // Filtre basé sur la recherche textuelle
   const filter = search ? { $text: { $search: search } } : {};

   // Récupération des livres avec tri par pertinence si recherche
   const books = await Book.find(
     filter,
     search ? { score: { $meta: "textScore" } } : {} // Ajout du score de recherche si applicable
   ).sort(search ? { score: { $meta: "textScore" } } : {}); // Tri par pertinence si recherche

   // Réponse avec les données
   res.json({ data: books });
 } catch (error) {
   res.status(500).json({ message: error.message });
 }
};

// export const getTrainerById = async (req, res) => {
//   try {
//     const trainer = await Trainer.findById(req.params.id).populate("team");
//     if (!trainer) return res.status(404).json({ message: "Trainer not found" });
//     res.json(trainer);
//   } catch (error) {
//     res.status(400).json({message: error.message});
//   }
// };

// export const updateTrainer = async (req, res) => {
//   try {
//     const updatedTrainer = await Trainer.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!updatedTrainer)
//       return res.status(404).json({ message: "Trainer not found" });
//     res.json(updatedTrainer);
//   } catch (error) {
//     res.status(400).json({message: error.message});
//   }
// };

export const deleteTrainer = async (req, res) => {
  try {
    const deleted = await Trainer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Trainer not found" });
    res.json({ message: "Trainer deleted successfully" });
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

// export const addPokemonToTeam = async (req, res) => {
//   try {
//     const { trainerId, pokemonId } = req.params;
//     const pokemon = await Pokemon.findById(pokemonId);
//     if (!pokemon) {
//       return res.status(404).json({ message: "Pokemon not found" });
//     }
//     const trainer = await Trainer.findById(trainerId);
//     if (!trainer) {
//       return res.status(404).json({ message: "Trainer not found" });
//     }
//     await trainer.addPokemon(pokemonId);
//     const updatedTrainer = await Trainer.findById(trainerId).populate("team");
//     res.json(updatedTrainer);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
