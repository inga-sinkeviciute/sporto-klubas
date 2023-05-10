import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./config/db.js";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./controllers/user.controller.js";
import { userExist } from "./middlewares/error.js";

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connection to MongoDB
connectMongoDB();

// Middlewares
app.use(express.json());

// Routes

// GET      | get all users
app.get("/api/users", getUsers);

// GET      | get single user based on id
app.get("/api/users/:id", userExist, getUser);

// POST     | create single user
app.post("/api/users", createUser);

// PUT      | update single user based on id
app.put("/api/users/:id", userExist, updateUser);

// DELETE   | delete single user based on id
app.delete("/api/users/:id", userExist, deleteUser);

// Starting server
app.listen(PORT, () => console.log("server is running on PORT:" + PORT));
