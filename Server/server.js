import express from "express";
import mongoose from "mongoose";
<<<<<<< HEAD
import { Port } from "./Const.js";
import routes from "./Routes/Routes.js";
import { mongoUrl } from "./Const.js";
import bodyParser from "body-parser";
import cors from "cors"

=======
import { PORT, mongoUrl } from "./Const.js";
import routes from "./Routes/Routes.js";
import bodyParser from "body-parser";
import  cors  from "cors";
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31

const app = express();
app.use(cors());

<<<<<<< HEAD

=======
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/authenticate", routes);

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Database Connection successfully!!!"))
  .catch((err) => console.log("Database Connection Failed!!!", err.message));

<<<<<<< HEAD
app.listen(Port, () => {
  console.log(`Server listening at ${Port}`);
});
=======
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31
