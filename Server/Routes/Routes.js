import express from "express";
<<<<<<< HEAD
import { login } from "../Controllers/Login.js";
import { signup } from "../controllers/signup.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.get("/login", login);
=======
import { signup } from "../Controllers/Signup.js";
import { login } from "../Controllers/Login.js";
import { uploadData } from "../Controllers/Upload.js";
import { home } from "../Controllers/Home.js";
import { searchData } from "../Controllers/Search.js";

const Route = express.Router();

Route.post("/signup", signup);
Route.get("/login", login);
Route.post("/upload", uploadData);
Route.get("/search", searchData);
Route.get("/home", home);

>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31

export default Route;
