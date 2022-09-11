import express from "express";
import { Port } from "./Const.js";
import { mongoUrl } from "./Const.js";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Database Connection successfully!!!"))
  .catch((err) => console.log("Database Connection Failed!!!", err.message));


app.listen(Port, () => {
  console.log(`Server listening at ${Port}`);
});
