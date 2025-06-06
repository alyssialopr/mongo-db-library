import Customer from "../models/Customer.js";

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

export const getCustomers = async (req, res) => {

  try {
    const customers = await Customer.find();
    res.json({ data: customers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
