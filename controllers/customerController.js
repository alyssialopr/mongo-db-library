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

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { mail, firstname, lastname, birthdate, country, language, loanBook } =
    req.body;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        mail,
        firstname,
        lastname,
        birthdate,
        country,
        language,
        loanBook,
      },
      { new: true }
    );

    if (!updatedCustomer)
      return res.status(404).json({ message: "Customer not found" });

    res.json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {

  try {
    const customers = await Customer.find();

    const customersWithMethods = customers.map((customer) => ({
      ...customer.toObject(),
      plus10LoanBooks: customer.plus10LoanBooks(),
      age: customer.age(),
      isAdult: customer.isAdult(),
    }));

    res.json({ data: customersWithMethods });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loanBookToCustomer = async (req, res) => {
  const { id } = req.params;
  const { bookId } = req.body;

  try {
    const customer = await Customer.findById(id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    if (customer.plus10LoanBooks())
      return res.status(400).json({ message: "Customer has already 10 loaned books" });
    if (customer.loanBook.includes(bookId))
      return res.status(400).json({ message: "Book already loaned to this customer" });
    customer.loanBook.push(bookId);
    await customer.save();
    res.json({ message: "Book successfully loaned to customer", customer });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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
