import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  userFirstname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 30,
  },
  userLastname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 30,
  },
  userEmail: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 60,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
  },
});

export const signupModel = new mongoose.model("signupDatas", signupSchema);
