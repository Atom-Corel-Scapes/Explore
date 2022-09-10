import express from "express";
import mongoose from "mongoose";
import { Port } from "./Const.js";
import routes from "../Server/routes/index.js"
import { mongoUrl } from "./Const.js";

const app = express();

mongoose.connect(mongoUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open",  () => {
  console.log("Database Connected successfully");
});

app.use(routes);

app.listen(Port, () => {
  console.log(`Server listening at ${Port}`);
});
