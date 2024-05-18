import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import authorsRoute from "./routes/authors.js";
import blogsRoute from "./routes/blogs.js";
import booksRoute from "./routes/books.js";
import usersRoute from "./routes/users.js";
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to database");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB Disconnected");
});

//middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/authors", authorsRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/books", booksRoute);
app.use("/api/users", usersRoute);

app.listen(8000, () => {
  connect();
  console.log("connected to backend");
});
