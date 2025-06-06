import Customer from "../models/Customer.js";
import Book from "../models/Book.js";

const customers = async () => {
  const book1 = await Book.findOne({ name: "Brock Harrison" });
  const book2 = await Book.findOne({ name: "Misty Waterflower" });
  const book3 = await Book.findOne({ name: "Ash Ketchum" });

  return [
    {
      mail: "azeazeae@gmail.com",
      firstname: "Ash Ketchum",
      lastname: "Ketchum",
      birthdate: new Date("1990-05-22"),
      country: "Kanto",
      language: "English",
      loanBook: [book1?._id, book2?._id],
    },
    {
      mail: "misty@gmail.com",
      firstname: "Misty",
      lastname: "Waterflower",
      birthdate: new Date("1992-08-15"),
      country: "Kanto",
      language: "English",
      loanBook: [book3?._id, book1?._id],
    },
  ];
};

const seedCustomers = async () => {
  const customerData = await customers();
  await Customer.deleteMany({});
  await Customer.insertMany(customerData);
};

export default seedCustomers;