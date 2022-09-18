import bcrypt from "bcrypt";
<<<<<<< HEAD
import { signupModel } from "../Model/Model.js";

export const signup = async (req, res) => {
  signupModel.findOne({ userEmail: req.body.userEmail }, async (err, data) => {
=======
import { signupModel } from "../Schema/UserSchema.js";

export const signup = async (req, res) => {
  userModel.findOne({ userEmail: req.body.userEmail }, async (err, data) => {
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31
    if (err) {
      console.log(err);
    } else {
      if (data) {
        res.send(
          "The Email has been taken already!!! Please enter a new Email ID"
        );
      } else {
        const body = req.body;
        if (
          !(
            body.userFirstname &&
            body.userLastname &&
            body.userEmail &&
            body.userPassword &&
            body.userPhoneNumber
          )
        ) {
          return res.status(400).send({ error: "Data not formatted properly" });
        }
<<<<<<< HEAD
        const user = new signupModel(body);
=======
        const user = new userModel(body);
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31
        const salt = await bcrypt.genSalt(10);
        user.userPassword = await bcrypt.hash(user.userPassword, salt);
        user.save((err, data) => {
          if (err) {
            res.send(err);
          }
          res.status(200).send({
<<<<<<< HEAD
            message: "User's Credentials have been added successfully!!!",
            data: data,
=======
            message: "User's data have been added successfully!!!",
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31
          });
        });
      }
    }
  });
};
