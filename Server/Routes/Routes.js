import express from "express";
import { signup } from "../controllers/signup.js";

const Route = express.Router();
Route.post("/signup", signup);

export default Route;
