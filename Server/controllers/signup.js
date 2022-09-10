import express from "express";

const signup = express();

signup.post("/signup", function (req, res) {
  res.send("welcome to signup page");
});
export default signup;