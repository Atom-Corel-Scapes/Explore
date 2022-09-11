import express from "express";
import { signupModel } from "../Model/Model.js";

const signup = express();

signup.post("/signup", (req, res) => {
  const signup = new signupModel(req.body);
  signupModel.findOne({ userEmail: req.body.userEmail }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data) {
        res.send(
          "The Email has been taken already!!! Please enter a new Email ID"
        );
      } else {
        signup.save((err, data) => {
          if (err) {
            console.log(err);
          }
          res.status(200).send({
            message: "User's Credentials have been added!!!",
            data: data,
          });
        });
      }
    }
  });
});

export default signup;
