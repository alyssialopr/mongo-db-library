import Customer from "../models/Customer.js";

// Créer un nouveau client
export const createCustomer = async (req, res) => {
  const { mail, firstname, lastname, birthdate, country, language, loanBook } =
    req.body;

  try {
    const newCustomer = new Customer({
      mail,
      firstname,
      lastname,
      birthdate,
      country,
      language,
      loanBook,
    });

    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupérer tous les clients
export const getCustomers = async (req, res) => {
  //const { search } = req.query;

  try {
    // Filtre basé sur la recherche textuelle
    //const filter = search ? { $text: { $search: search } } : {};

    //const customers = await Customer.find(filter).populate("loanBook");
    const customers = await Customer.find();
    res.json({ data: customers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un client par ID
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer)
      return res.status(404).json({ message: "Customer not found" });

    res.json({ message: "Customer successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
