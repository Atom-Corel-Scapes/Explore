import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadData } from "../Controllers/upload.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.get("/login", login);
Route.post("/upload", uploadData);

export default Route;
