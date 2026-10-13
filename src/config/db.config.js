import mongoose from "mongoose";

async function dbConnect() {
  await mongoose.connect("mongodb://localhost:27017/testdb");

  console.log("Database connected successfully");
}
export default dbConnect;
