import mongoose from "mongoose";

// Signup Schema
const signupSchema = new mongoose.Schema(
  {
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
      maxLength: 100,
    },
    userPhoneNumber: {
      type: Number,
      required: true,
      minLength: 10,
    },
  },
  { timestamps: true }
);

export const signupModel = new mongoose.model("signupDatas", signupSchema);

// upload Schema
const uploadSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true
  },
  placeTag: {
    type: String,
    requried: true
  },
  placeDescription: {
    type: String,
    requried: true
  },
  placeImage: {
    data: Buffer,
    contentType: String
  }
},
  { timestamps: true }
)
export const uploadModel = new mongoose.model('upload', uploadSchema);
