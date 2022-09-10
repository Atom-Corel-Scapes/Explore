import express from "express";

const detail = express();

detail.get("/detail", function (req, res) {
  res.send("welcome to detail page");
});
export default detail;