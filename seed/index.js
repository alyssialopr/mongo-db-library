import mongoose from "mongoose";
import seedBooks from "./book.js";
import seedCustomers from "./customer.js";
import seedLibraries from "./library.js";
import dotenv from "dotenv";

dotenv.config();

const seed = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    await seedBooks();
    await seedCustomers();
    await seedLibraries();
    console.log("Data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(0);
  }
};

seed();
