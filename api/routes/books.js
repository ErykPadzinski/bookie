import express from "express";
import Book from "../models/Book.js";
import {
  createBook,
  getBook,
  updateBook,
  deleteBook,
  getAllBooks,
} from "../controllers/book.js";

const router = express.Router();

//CREATE
router.post("/", createBook);
//GET
router.get("/:id", getBook);
//GET ALL
router.get("/", getAllBooks);
//UPDATE
router.put("/:id", updateBook);
//DELETE
router.delete("/:id", deleteBook);

export default router;
