import express from "express";
import { Port } from "./Const.js";

const app = express();

app.listen(Port, () => {
  console.log(`Server listening at ${Port}`);
});
