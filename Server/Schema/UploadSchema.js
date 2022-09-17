import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema();
export const uploadModel = new mongoose.model("upload", uploadSchema);
