import Customer from "../models/Customer.js";

const customers = [
  {
    mail: "azeazeae@gmail.com",
    firstname: "Ash Ketchum",
    lastname: "Ketchum",
    birthdate: new Date("1990-05-22"),
    country: "Kanto",
    language: "English",
    loanBook: ["Brock Harrison", "Misty Waterflower"],
  },
 {
    mail: "",
    firstname: "Misty",
    lastname: "Waterflower",
    birthdate: new Date("1992-08-15"),
    country: "Kanto",
    language : "English",
    loanBook: ["Ash Ketchum", "Brock Harrison"],
 }
];

const seedCustomers = async () => {
  await Customer.deleteMany({});
  await Customer.insertMany(customers);
};

export default seedCustomers;
