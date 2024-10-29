import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});
const DbUri = process.env.MONGO_URI;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DbUri);
}

export default main;
