import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../controllers/signup.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.post("/login", login);

export default Route;
