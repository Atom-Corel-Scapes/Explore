import express from "express";
import { login } from "../Controllers/Login.js";
import { searchData } from "../Controllers/Search.js";
import { signup } from "../controllers/signup.js";
import { uploadData } from "../Controllers/upload.js";
const Route = express.Router();
Route.post("/signup", signup);
Route.get("/login", login);
Route.post("/upload", uploadData);
Route.get("/search", searchData);

export default Route;
