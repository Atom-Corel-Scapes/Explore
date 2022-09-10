import express from "express"
import login from "../controllers/login.js"
import signup from "../controllers/signup.js"
import landing from "../controllers/landing.js"
import detail from "../controllers/detail.js"

const Route =express.Router();
Route.get ('/',login);
Route.post ('/signup',signup);
Route.get ('/landing',landing);
Route.get ('/detail',detail);

export default Route;