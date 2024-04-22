import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

app.get("/", (req, res) => {
  res.send("hellos");
});
app.listen(8000, () => {
  connect();
  console.log("connected to backend");
});
