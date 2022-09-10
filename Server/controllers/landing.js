import express from "express";

const landing = express();

landing.get("/landing", function (req, res) {
  res.send("welcome to landing page");
});
export default landing;