import Library from "../models/Library.js";

// Créer une nouvelle bibliothèque
export const createLibrary = async (req, res) => {
  const { books, name } = req.body;

  try {
    const newLibrary = new Library({
      books,
      name,
    });

    await newLibrary.save();
    res.status(201).json(newLibrary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupérer toutes les bibliothèques
export const getLibraries = async (req, res) => {
  const { search } = req.query;

  try {
    // Filtre basé sur la recherche textuelle
    const filter = search ? { $text: { $search: search } } : {};

    const libraries = await Library.find(filter).populate("books");
    res.json(libraries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une bibliothèque par ID
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