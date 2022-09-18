<<<<<<< HEAD
import { signupModel } from "../Model/Model.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  // res.send("inside");
  const query = req.query;
  const user = await signupModel.findOne({ userEmail: query.userEmail });
  if (user) {
    const validPassword = await bcrypt.compare(
      query.userPassword,
=======
import { signupModel } from "../Schema/UserSchema.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const body = req.body;
  const user = await userModel.findOne({ userEmail: body.userEmail });
  if (user) {
    const validPassword = await bcrypt.compare(
      body.userPassword,
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31
      user.userPassword
    );
    if (validPassword) {
      res.status(200).send({ message: "Valid password" });
    } else {
      res.status(400).send({ error: "Invalid Password" });
    }
  } else {
    res.status(401).send({ error: "User does not exist" });
  }
};
