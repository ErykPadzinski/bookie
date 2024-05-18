import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  rate: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },

  // think how to chose a category
});

export default mongoose.model("Book", BookSchema);
