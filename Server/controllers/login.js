import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("welcome to login page");
});
export default app;

